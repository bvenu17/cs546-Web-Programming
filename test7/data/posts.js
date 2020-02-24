const mongoCollections = require('../config/mongoCollections');
const posts = mongoCollections.posts;
const users = require('./users');
const uuid = require('uuid/v4');

const exportedMethods = {
  async getAllPosts() {
    const postCollection = await posts();
    return await postCollection.find({}).toArray();
  },

  async getPostById(id) {
    const postCollection = await posts();
    const post = await postCollection.findOne({_id: id});

    if (!post) throw 'Post not found';
    return post;
  },
  async addPost(title, content, author) {
    if (typeof title !== 'string') throw 'No title provided';
    if (typeof content !== 'string') throw 'I aint got nobody!';

    // if (!Array.isArray(tags)) {
    //   tags = [];
    // }

    const postCollection = await posts();

    const userThatPosted = await users.getUserById(author);

    const newPost = {
      title: title,
      content: content,
      author: {
        id: author,
        name: `${userThatPosted.name}`
      },
      _id: uuid()
    };

    const newInsertInformation = await postCollection.insertOne(newPost);
    const newId = newInsertInformation.insertedId;

    await users.addPostToUser(author, newId, title);

    return await this.getPostById(newId);
  },
  async removePost(id) {
    const postCollection = await posts();
    const deletedPost = await this.getPostById(id);

    // let post = null;
    // try {
    //    post = await this.getPostById(id);
    // } catch (e) {
    //   console.log(e);
    //   return;
    // }
    const deletionInfo = await postCollection.removeOne({_id: id});
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete post with id of ${id}`;
    }

    const retObj1 = {
      deleted: true,
      data:deletedPost
    }
    await users.removePostFromUser(deletedPost.author.id, id);

    
    return retObj1;
  },
  async updatePost(id, updatedPost) {
    const postCollection = await posts();

    const updatedPostData = {};

    

    if (updatedPost.newTitle) {
      updatedPostData.title = updatedPost.newTitle;
    }

    if (updatedPost.newContent) {
      updatedPostData.content = updatedPost.newContent;
    }

    await postCollection.updateOne({_id: id}, {$set: updatedPostData});

    return await this.getPostById(id);
  },
  async renameTag(oldTag, newTag) {
    if (oldTag === newTag) throw 'tags are the same';
    let findDocuments = {
      tags: oldTag
    };

    let firstUpdate = {
      $addToSet: {tags: newTag}
    };

    let secondUpdate = {
      $pull: {tags: oldTag}
    };

    const postCollection = await posts();
    await postCollection.updateMany(findDocuments, firstUpdate);
    await postCollection.updateMany(findDocuments, secondUpdate);

    return await this.getPostsByTag(newTag);
  }
};

module.exports = exportedMethods;
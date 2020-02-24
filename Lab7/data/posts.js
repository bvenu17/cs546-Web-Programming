const mongoCollections = require('../config/mongoCollections');
const posts = mongoCollections.posts;
const animals = require('./animals');
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
    //if(typeof author!=="string"||)

    

    const postCollection = await posts();

    const animalThatPosted = await animals.getAnimalById(author);

    const newPost = {
      title: title,
      content: content,
      author: {
        id: author,
        name: `${animalThatPosted.name}`
      },
      _id: uuid()
    };

    const newInsertInformation = await postCollection.insertOne(newPost);
    const newId = newInsertInformation.insertedId;

    await animals.addPostToAnimal(author, newId, title);

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
    await animals.removePostFrom(deletedPost.author.id, id);

    
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
  }
  
};

module.exports = exportedMethods;
const animals = require("./data/animals");

async function main() {


    try {
        const create1 = await animals.create("Sasha", "dog");
        console.log(create1);
    } catch(e) {
        console.log(e);
    }

    try {
        const create2 = await animals.create("Lucy", "dog");
        console.log(create2);
    } catch(e) {
        console.log(e);
    }

    try {
        const allAnimals = await animals.getAll();
        console.log(allAnimals);
    } catch(e) {
        console.log(e);
    }

    try {
        const create3 = await animals.create("Duke", "Walrus");
        console.log(create3);
    } catch(e) {
        console.log(e);
    }

    try {
        const rename = await animals.rename("5d97ef21503ebd1a3b2ff686", "harish");
        console.log(rename);
    } catch(e) {
        console.log(e);
    }

    try {
        const remove = await animals.remove("5d97b88585c5a118300feee3");
        console.log(remove);
    } catch(e) {
        console.log(e);
    }
}

main();
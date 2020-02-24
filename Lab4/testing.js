const animals = require("./data/animals");
const connection = require("./mongoConnection");

async function main() {
    // try
    // {
    // const Sasha = await animals.create("Sasha", "Dog");
    // console.log(Sasha);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // //Error
    // try
    // {
    // const Sasha = await animals.create("", "Dog");
    // console.log(Sasha);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // //Error
    // try
    // {
    // const Sasha = await animals.create("Sasha", "");
    // console.log(Sasha);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // //Error
    // try
    // {
    // const Sasha = await animals.create(undefined , "Dog");
    // console.log(Sasha);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // //Error
    // try
    // {
    // const Sasha = await animals.create("Sasha", undefined);
    // console.log(Sasha);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // //Error
    // try
    // {
    // const Sasha = await animals.create();
    // console.log(Sasha);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // //Error
    // try
    // {
    // const Sasha = await animals.create(null , undefined);
    // console.log(Sasha);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // //Error
    // try
    // {
    // const Sasha = await animals.create(null , null);
    // console.log(Sasha);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    
    // try
    // {
    // const Lucy = await animals.create("Lucy", "Dog");
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // try
    // {
    // const allMyAnimals1 = await animals.getAll();
    // console.log(allMyAnimals1);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // try
    // {
    // const Duke = await animals.create("Duke", "Walrus");
    // console.log(Duke);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // try
    // {
    // const allMyAnimals2 = await animals.getAll();
    // console.log(allMyAnimals2);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }

    // try
    // {
    // const falseGet = await animals.get("Should not work");
    // console.log(falseGet);
    // console.log("");
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }


    try
    {
    const Sashita = await animals. rename("5d97e82cedf2fa1a095f1a8f","Sashita");
    console.log(Sashita);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

   // Error
    try
    {
    const Sashita = await animals. rename("5d97e82dedf2fa1a095f1a91","Duke");
    console.log(Sashita);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    try
    {
    const removeLucy = await animals.remove("5d97e82dedf2fa1a095f1a90");
    console.log(removeLucy);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    //Error
    try
    {
    const removeLucy = await animals.remove();
    console.log(removeLucy);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    //Error
    try
    {
    const removeLucy = await animals.remove(null);
    console.log(removeLucy);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

  //  Error
    try
    {
    const removeLucy = await animals.remove(undefined);
    console.log(removeLucy);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

   // Error
    try
    {
    const removeLucy = await animals.remove("Should not work");
    console.log(removeLucy);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

  //  Error
    try
    {
    const Sashita = await animals. rename("5d97e82dedf2fa1a095f1a90","Duke");
    console.log(Sashita);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

  //  Error
    try
    {
    const Sashita = await animals. rename("Should not work","Duke");
    console.log(Sashita);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    //Error
    try
    {
    const Sashita = await animals. rename(undefined,"Duke");
    console.log(Sashita);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    //Error
    try
    {
    const Sashita = await animals. rename(null ,"Duke");
    console.log(Sashita);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

   // Error
    try
    {
    const Sashita = await animals. rename("" ,"");
    console.log(Sashita);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

   // Error
    try
    {
    const Sashita = await animals. rename("" ,null);
    console.log(Sashita);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

  //  Error
    try
    {
    const Sashita = await animals. rename("" ,undefined);
    console.log(Sashita);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    // Error
    try
    {
    const Sashita = await animals. rename("" , "");
    console.log(Sashita);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    try
    {
    const allMyAnimals3 = await animals.getAll();
    console.log(allMyAnimals3);
    console.log("");
    }
    catch(error)
    {
        console.log(error);
    }

    try
    {
    const db = await connection();
    await db.serverConfig.close();
    }
    catch(error)
    {
        console.log(error);
    }
}

main()
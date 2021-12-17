import "reflect-metadata";
import { createConnection, getConnection, } from "typeorm";
import { User } from "./entity/User";
import { dbConfig } from '../config';
import "./connection"

// createConnection({ type: "cockroachdb", ...dbConfig, }).then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user, {});
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User, {});
//     // const users = await connection.getRepository(User).;
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

(async () => {
    const conn = await getConnection().connect()
    // const user = new User();
    const repo = conn.getRepository(User);
    let user = await repo.findOne(3)
    if (user) {
        user = await repo.remove(user)
    }

    const users = await conn.manager.find(User, {});

    console.log("user deleted: ", user);
    console.log("Loaded users: ", users);
})();



(async () => {
    const conn = await getConnection().connect()
    const user = new User();
    user.name = "Timber";
    user.email = "example1.email.com";
    user.password = "timber123";
    user.phoneNo = "3754937580734";

    const _user = await conn.manager.save(user);
    // const _user = await conn.manager.insert(User, [user]);
    // const _user = await conn.manager.findOne(User, { where: { id: 2 } });


    const users = await conn.manager.find(User, {});

    console.log("user created: ", _user);
    console.log("Loaded users: ", users);
})
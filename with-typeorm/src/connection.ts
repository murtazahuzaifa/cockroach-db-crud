import "reflect-metadata";
import { createConnection } from "typeorm";
import { dbConfig } from '../config';

createConnection({ type: "cockroachdb", ...dbConfig})
    .then((connection) => { console.log("connection created") })
    .catch(error => { console.log("error", error) })
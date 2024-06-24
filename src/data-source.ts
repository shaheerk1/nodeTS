import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "typeormdb",
    synchronize: false,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],

})

// Initialize the data source (optional, depending on your application structure)
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
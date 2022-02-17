// importing package
import mongoose from "mongoose";
import { Sequelize } from "sequelize";

import MONGODB_URL from "./config/mongoURL";
import DB_TYPE from "./config/db";
import POSTGRES_URL from "./config/psql";
import logger from "./logger";

// connecting to db
const mongoConnect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(logger.info("database is connected"))
    .catch((err) => logger.error(err));
  return null;
};

const db =
  DB_TYPE === "postgres"
    ? new Sequelize(POSTGRES_URL, {
        logging: (msg) =>
          process.env.NODE_ENV === "development"
            ? logger.info(msg)
            : logger.debug(msg),
      })
    : mongoConnect();

export default db;

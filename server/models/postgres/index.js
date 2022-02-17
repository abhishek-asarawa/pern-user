import sequelize from "../../database";
import logger from "../../logger";

const syncTable = async () => {
  await sequelize.authenticate();
  logger.info("connected to database");

  // syncing tables with db
  console.log(process.env.NODE_ENV);
  process.env.NODE_ENV === "development"
    ? await sequelize.sync({ alter: true })
    : await sequelize.sync();

  logger.info("syncing tables with models");
};

export default syncTable;

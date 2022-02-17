import db from "../config/db";
import MongoUser from "../models/mongo/user";
import SeqUser from "../models/postgres/user";

export const add = async (data) => {
  const user =
    db !== "postgres"
      ? await MongoUser.create({ ...data })
      : await SeqUser.create({ ...data }).toJSON();
  return user;
};

export const findUserByEmail = (email) => {
  return db !== "postgres"
    ? MongoUser.findOne({ email })
    : SeqUser.findOne({ where: { email } });
};

export const findUserById = (id) => {
  return db !== "postgres" ? MongoUser.findById(id) : SeqUser.findByPk(id);
};

export const totalUsers = () => {
  return db !== "postgres" ? MongoUser.countDocuments() : SeqUser.count();
};

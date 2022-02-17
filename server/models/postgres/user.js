import { DataTypes } from "sequelize";
import sequelize from "../../database";

const userSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options =
  process.env.NODE_ENV === "development"
    ? {
        tableName: "test_users",
      }
    : {}; // in production sequelize will create table

// defining model for task
// * sequelize create createAt and updateAt column
const User = sequelize.define(
  "User",
  {
    ...userSchema,
  },
  {
    ...options,
  }
);

export default User;

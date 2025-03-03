import mongoose from "mongoose";
import { hashPassword, verifyPassword } from "../utils/utils.js";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      default: uuidv4,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const { hashedPassword, salt } = await hashPassword(this.password);
    this.password = hashedPassword;
    this.salt = salt;
    next();
  }

  return next();
});

userSchema.methods.comparePassword = async function (password) {
  return verifyPassword(password, this.password, this.salt);
};

userSchema.methods.omitSensitiveData = function () {
  const user = this.toObject();
  user.password && delete user.password;
  user._id && delete user._id;
  delete user.__v;
  return user;
};

const User = mongoose.model("User", userSchema);

export default User;

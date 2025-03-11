import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import Role from "./role.model";
import { compareValue, hashValue } from "../utils/bcrypt";

export interface UserDocument extends Document {
  image: string;
  userId: string;
  username: string;
  password: string;
  email: string;
  role: Schema.Types.ObjectId[];
  omitPassword(): Omit<UserDocument, "password" | "__v" | "_id">;
  comparePassword(val: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument>(
  {
    userId: { type: String, required: true, unique: true, default: uuidv4 },
    image: { type: String, required: false, default: "" },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    role: { type: [Schema.Types.ObjectId], ref: "Role", required: true },
  },
  { timestamps: true }
);

userSchema.pre<UserDocument>("save", async function (next) {
  if (!this.role || this.role.length === 0) {
    const defaultRole = await Role.findOne({ name: "User" });
    if (defaultRole) {
      this.role = [
        defaultRole._id.toString() as unknown as Schema.Types.ObjectId,
      ];
    }
  }
  next();
});

userSchema.methods.omitPassword = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await hashValue(this.password);
  next();
});

userSchema.methods.comparePassword = async function (val: string) {
  return compareValue(val, this.password);
};

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;

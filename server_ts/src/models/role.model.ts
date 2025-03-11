import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface RoleDocument extends Document {
  name: string;
  roleId: string;
}

const roleSchema = new Schema<RoleDocument>(
  {
    roleId: { type: String, required: true, unique: true, default: uuidv4 },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Role = mongoose.model<RoleDocument>("Role", roleSchema);

export default Role;

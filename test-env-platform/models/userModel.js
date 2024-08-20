// This file defines how users are stored in the database.
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {//creating objects
    name: {
      type: String,
      required: true,
      trim: true,//removing whitespaces
    },
    email: {
      type: String,
      required: true,
      unique: true,//from one mail-id only one user should login
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: true,
      },
      address: {
        type: {},
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
      role: {
        type: Number,
        default: 0,
      },
},
{ timestamps: true }//this will new user created time there
);

export default mongoose.model("users", userSchema);//(table_name,reference)

//now we'll create routes for this

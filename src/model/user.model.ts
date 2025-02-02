/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Basic Schema
const User = new Schema(
    {
        // chat id
        user_id: {
            type: String,
            default: "",
            required: true,
        },
        language: {
            type: String,
            default: "",
            required: true,
        }
    },
    {
        timestamps: true, // This option adds createdAt and updatedAt fields
    }
);


export default mongoose.model("user", User);

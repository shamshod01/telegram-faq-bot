/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Basic Schema
const Language = new Schema(
    {
        code: {
            type: String,
            unique: true,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        flag: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true, // This option adds createdAt and updatedAt fields
    }
);

export default mongoose.model("language", Language);

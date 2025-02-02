/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Category = new Schema(
    {
        idx: {
            type: Number,
            required: true,
            unique: true,
        },
        language: {
            type: String,
            default: "",
            required: true,
        },
        title: {
            type: String,
            default: "",
            required: true,
        },
    },
    {
        timestamps: true, // This option adds createdAt and updatedAt fields
    }
);

export default mongoose.model("category", Category);

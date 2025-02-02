/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Basic Schema
const FAQ = new Schema(
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
        category: {
            type: String,
            default: "",
            required: true,
        },
        question: {
            type: String,
            default: "",
            required: true,
        },
        answer: {
            type: String,
            default: "",
            required: true,
        },
    },
    {
        timestamps: true, // This option adds createdAt and updatedAt fields
    }
);

export default mongoose.model("faq", FAQ);

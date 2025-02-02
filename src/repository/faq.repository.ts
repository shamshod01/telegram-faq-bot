import {FAQSchema} from "../model";

export const FAQRepository = {
    getByCategoryIdx: async (categoryIdx: string, offset: number, limit: number) => {
        try {
            return await FAQSchema.find({category: categoryIdx}).skip(offset).limit(limit);
        } catch (e) {
            console.log(e);
            return [];
        }
    },
    getOne(idx: number) {
        try {
            return FAQSchema.findOne({idx})
        } catch (e) {
            console.log(e);
            return null;
        }
    },
    saveFAQ: async (idx: number, question: string, answer: string, language: string, category: string) => {
        try {
            return await FAQSchema.create({idx, question, answer, language, category});
        } catch (e) {
            console.log(e);
        }
    },
    deleteFAQ: async (id: string) => {
        try {
            return await FAQSchema.findByIdAndDelete(id);
        } catch (e) {
            console.log(e);
        }
    }
}
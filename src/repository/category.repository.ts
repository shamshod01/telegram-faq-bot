import {CategorySchema} from "../model";

export const CategoryRepository = {
    getByLang: async (language: string) => {
        try {
            return await CategorySchema.find({language: language})
        } catch (e) {
            console.log(e);
            return [];
        }
    },
    getOne(idx: number) {
        try {
            return CategorySchema.findOne({idx})
        } catch (e) {
            console.log(e);
        }
    },
    saveCategory: async (idx: number, title: string, language: string) => {
        try {
            return await CategorySchema.create({idx, title, language});
        } catch (e) {
            console.log(e);
        }
    },
    deleteCategory: async (id: string) => {
        try {
            return await CategorySchema.findByIdAndDelete(id);
        } catch (e) {
            console.log(e);
        }
    }
}
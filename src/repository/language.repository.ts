import {LanguageSchema} from "../model";

export const LanguageRepository = {

    get: async (code: string) => {
        try {
            return await LanguageSchema.findOne({code});
        } catch (e) {
            console.log(e);
        }
    },
    getLanguages: async () => {
        try {
            return await LanguageSchema.find({});
        } catch (e) {
            console.log(e);
            return [];
        }
    },
    save: async (language: any) => {
        try {
            return await LanguageSchema.create(language);
        } catch (e) {
            console.log(e);
        }
    },
    delete: async (id: string) => {
        try {
            return await LanguageSchema.findByIdAndDelete(id);
        } catch (e) {
            console.log(e);
        }
    }
}
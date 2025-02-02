import {UserSchema} from "../model";

export const UserRepository = {
    saveLanguage: async (user_id: string, language: string ) => {
        try {
            return await UserSchema.findOneAndUpdate({user_id: user_id}, {language: language}, {upsert: true});
        } catch (e) {
            console.log(e);
        }
    },
    getLanguage: async (user_id: string) => {
        try {
            const user = await UserSchema.findOne({user_id});
            return user?.language ?? 'en';
        } catch (e) {
            console.log(e);
            return 'en';
        }
    }
};

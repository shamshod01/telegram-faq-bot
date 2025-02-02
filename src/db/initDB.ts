import * as fs from "node:fs";
import {CategoryRepository, FAQRepository, LanguageRepository} from "../repository";
import * as path from "node:path";

const initLanguages = async () => {
    try {
       const rawData = fs.readFileSync(path.join(__dirname,'./languages.json'), 'utf-8');
         const languages = JSON.parse(rawData);
         //save languages to db
         for(const language of languages) {
             console.log(language);
             await LanguageRepository.save(language);
         }
        console.log('Languages initialized');
    } catch (err: any) {
        console.log(err);
    }
}

const initCategory = async () => {
    try {
        const rawData = fs.readFileSync(path.join(__dirname, './categories.json'), 'utf-8');
        const categories = JSON.parse(rawData);
        // save categories to db
        for(const category of categories) {
            console.log(category);
            await CategoryRepository.saveCategory(category.idx, category.title, category.language);
        }
        console.log('Categories initialized');
    } catch (err: any) {
        console.log(err);
    }
}

const initFAQ = async () => {
    try {
        const rawData = fs.readFileSync(path.join(__dirname, './faq.json'), 'utf-8');
        const faqs = JSON.parse(rawData);
        // save faqs to db
        for(const faq of faqs) {
            console.log(faq);
            await FAQRepository.saveFAQ(faq.idx, faq.question, faq.answer, faq.language, faq.category);
        }
        console.log('FAQs initialized');
    } catch (err: any) {
        console.log(err);
    }
}

export const initDB = async () => {
    await initLanguages();
    await initCategory();
    await initFAQ();
}
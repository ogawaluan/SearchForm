import { Schema, model, Document } from 'mongoose';
export interface FormInterface {
    _id: String,
    ageRange: String,
    healthInsurance: String,
    salary: String,
    why: String
}
const FormSchema = new Schema({
    ageRange: { type: String, required: true },
    healthInsurance: { type: String, required: true },
    salary: { type: String, required: true },
    why: { type: String, required: true }
});

export type FormDocument = Document & FormInterface;
export default model<FormDocument>('Form', FormSchema);

import * as mongoose from 'mongoose';
import { Document } from "mongoose";

export const CourseSchema = new mongoose.Schema({
  title: String,
  coefficient: Number,
})

export interface Course extends Document {
  title: String;
  coefficient: Number;
}
import * as mongoose from 'mongoose';
import { Document } from "mongoose";

export const StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  level: String,
  totalScore: Number,
  courses: [
    {
      course: String,
      coefficient: Number,
      mark: Number
    }
  ]
})

export interface Student extends Document {
  firstName: string;
  lastName: string;
  email: string;
  level: string;
  totalScore: Number;
  courses: [
    {
      course: String;
      coefficient: Number;
      mark: Number;
    }
  ]
}
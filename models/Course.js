import mongoose from 'mongoose';
const { Schema } = mongoose;

const CourseSchema = new Schema({
    title: String,
    description: String,
    views: String,
    link: String
});
const Course = mongoose.model('Course', CourseSchema);

export default Course;

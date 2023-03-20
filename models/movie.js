import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    }, 
    link : {
        type : String, 
        required : true
    }, 
    genre : {
        type : String, 
        required : true
    }, 
    date : {
        type : String, 
        default : new Date()
    }
})

mongoose.models = {}; 

export default mongoose.model('movie',movieSchema); 
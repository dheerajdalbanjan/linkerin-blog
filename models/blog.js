import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type : String, 
        required: true
    }, 
    description: {
        type : String,
        required: true
    }, 
    image : {
        type : String , 
        required : true
    },
    content: {
        type : String, 
        required: true
    },
    category:{
        type : String, 
        required: true
    },
    author:{
        type : String, 
        required : true
    },
    tags:{
        type : String,
        required : true
    },
    date : {
        type: Date, 
        default:new Date()
    }
}); 
mongoose.models = {} ; 

export default mongoose.model('blog',blogSchema); 
import mongoose from "mongoose";
import blog from '../../models/blog'

export default async function handler(req,res){
    if(req.method == 'POST'){
        if(!mongoose.connections[0].readyState){
            mongoose.connect(process.env.MONGO_URI); 
        }
        const blogd = req.body; 
        const newblog = new blog(blogd); 
        try {
            await newblog.save()
            res.status(200).json({message:"successfully saved the blog", status:1})
        } catch (error) {
            res.status(404).json({message:"Couldn't add the blog", status:0})
        }
    }
}
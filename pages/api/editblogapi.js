import mongoose from "mongoose";
import blog from "../../models/blog";

export default async function handler(req, res) {
    if(req.method == 'POST'){
        if(!mongoose.connections[0].readyState){
            mongoose.connect(process.env.MONGO_URI); 
        }
        const {title, description, image, author, id, content, tags, category} = req.body; 
        try {
            await blog.findByIdAndUpdate(id, {
                title:title,
                description: description, 
                content: content, 
                image : image, 
                author: author, 
                tags: tags, 
                category: category
            })
            res.status(200).json({message:"successfully update the blog", status:1})
        } catch (error) {
            res.status(404).json({message:"Couldn't update the blog", status:0})
        }
    }
}
  
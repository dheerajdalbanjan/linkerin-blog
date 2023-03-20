import mongoose from "mongoose";
import movie from "../../models/movie";

export default async function handler(req, res) {
    if(req.method == 'POST'){
        if(!mongoose.connections[0].readyState){
            mongoose.connect(process.env.MONGO_URI);
        }
        let movies ;
        const query = req.body; 
        console.log(req.body); 
        try {
           movies = await movie.find({name:{$regex:query, $options:'i'}}) ; 
           res.status(200).json({status: 1, movies:JSON.parse(JSON.stringify(movies))});
        } catch (err) {
            console.log(err); 
            res.status(404).json({status: 0})
        }
    }
  }
  
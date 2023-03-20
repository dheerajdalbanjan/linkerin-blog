import mongoose from "mongoose";
import { useState } from "react";
import movie from "../../models/movie";

export default async function handler(req,res){
    let status = 1
    if(req.method == 'POST'){
        if(!mongoose.connections[0].readyState){
            mongoose.connect(process.env.MONGO_URI); 
        }
        const movi = req.body ; 
        movi.map(async (e, i) => {
            try {
                const moviee  = new movie(e); 
                 const smovie = await moviee.save();
            } catch (err) {
                status = 0
                res.status(404).json({status: 0})
            }
        })
        
        !status?res.status(200).json({status: 1}):null
    }
}
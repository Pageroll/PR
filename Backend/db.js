const mongoose = require('mongoose');

const mongo = ()=>{
     mongoose.connect('mongodb+srv://PageRoll:pg11002299@cluster0.nl3wbrd.mongodb.net/UserDb').then(()=>{
    console.log("DB connected")
  });
}

module.exports=mongo;
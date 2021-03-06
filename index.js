const express=require('express');
const mongo=require('./shared');
const getRouter=require('./router/hall')
const app=express();

app.use(express.json()); //inbuilt middleware //convert req body into json format
mongo.connect();

app.use('/users',getRouter);

const port=process.env.PORT || 3001
app.listen(port,function(){
    console.log("Port connected")
});



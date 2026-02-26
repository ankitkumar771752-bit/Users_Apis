const express=require('express');
const app=express();
const db=require('./db');
app.use(express.json());


// Get All  Teachers

app.get('/AllTeachers',(request,response)=>{
   
    const sqlQ="SELECT * FROM teachers";
    db.query(sqlQ,(error,results)=>{
        if(error){
           return response.json({
                message:"Errors: "+error
            })
        }
       return response.json({
            message:"All teachers Fetched",
            results
        })
    })
    
})

app.listen(5000, () => {
    console.log("5000 Server is Running...")
})




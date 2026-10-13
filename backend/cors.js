const express=require('express');

const app=express();


app.get('/data',(req,res)=>{
    const dummyData={
        users:[{id:1 , name:"Bobby",email:"bobby@gmail.com"}],
    };

    return res.setHeader('Access-Control-Allow-Origin','http://localhost:5173').json({data:dummyData});
    //return res.setHeader('Access-Control-Allow-Origin','*');
});


app.listen(8000,()=>console.log(`Server started on Port 8000`));

//cookies are not sent
//cred:include 
//Access control-Allow-Origin we cannot have * ,only http
//PUT ,PATCH,DELETE HAS PREFLIGHT REQUEST OPTIONS
//CORS depends on the frontend's origin, not on a fixed port number.
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'



const app= express();
app.use(express.json());
app.use(cookieParser())
app.use(cors(
 {
  origin:["http://localhost:3000/registration"],
  methods:["POST"],
credentials:true
 }
))


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  database:"mydata"
})

app.post('/login',(req,res)=>{
  const sql=" SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql,[req.body.email, req.body.password],(err,data)=>{
   if(err)return res.json ({message:'server side error'});
   if(data.length > 0){
// here we will implement our logic
// we will generate and also we will store it in a cookie
//then we will pass them to the frontend result
// we will grab a name from our record that is existed in our database
const name= data[0].name;
const token= jwt.sign({name}, "our-jsonwebtoken-secret-key",{expiresIn:'1d'})
res.cookie('token', token);
return res.json({Status:'Success'})

   }else{
    return res.json ({Message:'No Record'});
   }
  })
})

app.listen(8081,()=>{
  console.log('Connected...')
})
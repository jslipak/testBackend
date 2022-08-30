const express = require("express");
const app = express();
const PORT = 8082
let data = []

app.use(express.json())
app.use(express.urlencoded({ extended:true }));

app.post('/ingreso', (req,res)=>{
  data.push(req.body.number)
  res.json(true)
})

app.get('/egreso', (req,res)=>{
  res.json({data})
})

app.get('/', (req,res)=>{
  res.json({FyH: new Date})
})


app.listen(PORT,()=>{console.log(`http://localhost:${PORT}`)});

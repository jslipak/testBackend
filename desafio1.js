
// REQUEST HTTP
//HTTS.get('https://jsonplaceholder.typicode.com/posts', (res) => {
  //let data= "";
  //res.on('data', (chunk) => {
    //data += chunk;
  //});
//res.on("end", () => {
  //console.log(JSON.parse(data));
  //})
//})

const HTTS = require("https");
const AXIOS = require("axios");

//(async ()=> {
  //try{
    //let res = await AXIOS.get("https://jsonplaceholder.typicode.com/posts",{});
    //console.log(res)
  //} catch(err){
    //console.log(err)
  //}
//})();

//function 

async function getNumbers(){
  try{
    let res = await AXIOS.get("http://localhost:8082/egreso", {})
    console.log(res.data)}catch(error){console.log(error)}
}

async function pushNumber(){
try{
  // random number between 1 and 100
  let number = Math.floor(Math.random() * 100) + 1;
  console.log(number)
  let res = await AXIOS.post("http://localhost:8082/ingreso", {number})
  console.log(res.data)
  }catch(error){console.log(error)}
}

setInterval(async() =>{
console.log("Datos ingresados")
await getNumbers();
}, 10000)

setInterval(async() =>{
  console.log("agregar numero")
  await pushNumber();
  }, 2000)

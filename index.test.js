const request= require('supertest')('http://localhost:8082');
const expect = require('chai').expect;
const assert = require('assert').strict;
let axios = require('axios')

describe("Test de integraciona", async()=>{
  it("Cantidad", async()=>{
    for(let i=0; i<10 ; i++){
      let number= i + 1
      let res = await axios.post("http://localhost:8082/ingreso", {number})
    }
    let res = await axios.get("http://localhost:8082/egreso")
    expect(res.data.data.length).to.eql(10)
  })
  it("Consecutivos", async()=>{
      let arr  = [1,2,3,4,5,6,7,8,9,10]
      let res = await axios.get("http://localhost:8082/egreso")
      expect(res.data.data).to.eql(arr)
    })
})

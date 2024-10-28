const fs = require('fs')
;(async ()=> {
    let json = await (await fetch("https://irmapserver.ir/research/api/weather/")).json()
    // console.log(Object.keys(json))
    console.table(JSON.stringify(json,null,2))
    // fs.writeFileSync("./key.json",JSON.stringify(json,null,2))



})()


const express = require("express")
const app = express()

app.get("/",(req,res)=>{

    console.log("Ürünler Gönderildi..")
    
    res.status(200).json({
        products : [
            {id : 1 , title : "Elma" , price : 10},
            {id : 2 , title : "Muz" , price : 20},
            {id : 3 , title : "Kiraz" , price : 30},
            {id : 4 , title : "Armut" , price : 5},
            {id : 5 , title : "Çilek" , price : 50}

        ]
    })
    console.log(products)
})

module.exports={
    path : "/api",
    handler : app
}

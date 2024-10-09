const monggose=require("mongoose")



const connectDatabase =()=>{

    monggose.connect(process.env.DB_URL)
    .then((con)=>{
        console.log("MongoDb Connected to host:"+con.connection.host)


    })

}

module.exports=connectDatabase
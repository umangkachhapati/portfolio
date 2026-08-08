import mongoose from "mongoose";

const connectDB =async(DATABASEURL)=>{
    try{
        const dbOption={
            dbname: 'portfolio'
        }
        const response =await mongoose.connect(DATABASEURL,dbOption);
        if(response){
            console.log("Database connnected successfully")
        } else{
            console.log("Database not connected!")
        }
    }
     catch(error) {
        console.log(error.message)
    }
}

export default connectDB;
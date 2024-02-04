const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const get_restaurant_info=(req,res)=>{

	const sql="SELECT * FROM restaurant_info"
	connection.query(sql,(err,result)=>
	{
		if(err)
		{
			res.send("sorry, Error occured")
		}
		else
		{
			res.send(result)
		}
	})
}
module.exports=get_restaurant_info
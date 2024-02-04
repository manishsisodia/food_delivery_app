const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const retrieve_restaurant_menu=(req,res)=>
{
	const sql="SELECT * FROM menu"
	connection.query(sql,(err,result)=>
	{
		if(err)
		{
			res.send("error occured")
		}
		else
		{
			res.send(result)
		}
	})
}
module.exports=retrieve_restaurant_menu
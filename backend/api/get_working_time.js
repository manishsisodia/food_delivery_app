const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const get_working_time=(req,res)=>
{
	const sql="SELECT * FROM working_time"
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
module.exports=get_working_time
const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const get_owner_info=(req,res)=>{

	const sql="SELECT * FROM owner_info"
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
module.exports=get_owner_info
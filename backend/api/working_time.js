const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const working_time=(req,res)=>
{
	const email=req.body.restaurant_email
	const name=req.body.restaurant_name
	const open_time=req.body.open_time
	const close_time=req.body.close_time
	const data={
		"restaurant_email":email,
		"restaurant_name":name,
		"open_time":open_time,
		"close_time":close_time
	}
	connection.query("SELECT COUNT(*) AS count FROM restaurant_info WHERE restaurant_email = ? " ,email,(err,result)=>
	{
		if(err)
		{
			res.send("error in working_time_1")//throw err//console.log("error1")
		}
		else
		{
			if(result[0].count<1)
			{
				res.send("Please provide valid restaurant_email as in restaurant_info")
			}
			else
			{
				const sql="INSERT INTO working_time SET ?"
				connection.query(sql,data,(err,result)=>
				{
					if(err)
					{
						res.send("error in working_time_2")
					}
					else
					{
						res.send("your data saved successfully")
					}
				})
			}
		}
	})
}
module.exports=working_time
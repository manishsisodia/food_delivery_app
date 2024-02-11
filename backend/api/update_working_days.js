const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const update_working_days=(req,res)=>
{
	// const email=req.body.restaurant_email
	// const name=req.body.restaurant_name
	// const open_time=req.body.open_time
	// const close_time=req.body.close_time
	// const data={
	// 	"restaurant_email":email,
	// 	"restaurant_name":name,
	// 	"open_time":open_time,
	// 	"close_time":close_time
	// }
	const email=req.params.restaurant_email
	const name=req.body.restaurant_name
	const sunday=req.body.sunday
	const monday=req.body.monday
	const tuesday=req.body.tuesday
	const wednesday=req.body.wednesday
	const thursday=req.body.thursday
	const friday=req.body.friday
	const saturday=req.body.saturday
	
	connection.query("SELECT COUNT(*) AS count FROM working_time WHERE restaurant_email=?",email,(err,result)=>
	{
		if(err)
		{
			res.send("error in update_working_days_1")
		}
		else
		{
			if(result[0].count<1)
			{
				res.send("working days for this restaurant is not in the database")
			}
			else
			{
				const data=[name,sunday,monday,tuesday,wednesday,thursday,friday,saturday,email]
	const sql="UPDATE working_time SET restaurant_name=?, sunday=?, monday=?, tuesday=?, wednesday=?, thursday=?, friday=?, saturday=?  WHERE restaurant_email=?"
	connection.query(sql,data,(err,result)=>
	{
		if(err)
		{
			res.send("error in update_working_days_2")//throw err//res.send("error")
		}
		else
		{
			res.send("your data updated successfully")
		}
	})
			}
		}
	})
	
}
module.exports=update_working_days
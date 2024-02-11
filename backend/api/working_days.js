const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const working_days=(req,res)=>{
	const name=req.body.restaurant_name
	const email=req.body.restaurant_email
	const sunday=req.body.sunday
	const monday=req.body.monday
	const tuesday=req.body.tuesday
	const wednesday=req.body.wednesday
	const thursday=req.body.thursday
	const friday=req.body.friday
	const saturday=req.body.saturday
	const data={
		"restaurant_name":name,
		"restaurant_email":email,
		"sunday":sunday,
		"monday":monday,
		"tuesday":tuesday,
		"wednesday":wednesday,
		"thursday":thursday,
		"friday":friday,
		"saturday":saturday
	}
	connection.query("SELECT COUNT(*) AS count FROM restaurant_info WHERE restaurant_email = ? " ,email,(err,result)=>
	{
		if(err)
		{
			res.send("error in working_days_1")//throw err//console.log("error1")
		}
		else
		{
			if(result[0].count<1)
			{
				res.send("Please provide valid restaurant_email as in restaurant_info")
			}
			else
			{
				const sql="INSERT INTO working_days SET ?"
				connection.query(sql,data,(err,result)=>{
				if(err)
				{
					res.send("error in working_days_2")
				}
				else
				{
					res.send("Your data saved successfully")
				}
				})
			}
		}
	})
}
module.exports=working_days
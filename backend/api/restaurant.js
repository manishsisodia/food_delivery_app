const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const save_restaurant_data=(req,res)=>
{
	const name=req.body.restaurant_name;
	const type=req.body.restaurant_type;
	const email=req.body.restaurant_email;
	const phone=req.body.restaurant_phone;
	const address=req.body.restaurant_address;
	const city=req.body.restaurant_city;
	const zip=req.body.restaurant_zip;
	const data = {
		"restaurant_name" : name,
		"restaurant_type" : type,
		"restaurant_email" : email,
		"restaurant_phone" : phone,
		"restaurant_address" : address,
		"restaurant_city" : city,
		"restaurant_zip" : zip
	}
	console.log("incoming data is", data)
	connection.query("SELECT COUNT(*) AS count FROM restaurant_info WHERE restaurant_email = ? " ,email,(err,result)=>
	{
		if(err)
		{
			res.send("Error Occured")//throw err//console.log("error1")
		}
		else
		{
			if(result[0].count>1)
			{
				res.send("email already exist")
			}
			else
			{
				const sql1="INSERT INTO restaurant_info SET ?"  //VALUES (name,type,email,phone,address,city,zip)
	connection.query(sql1,data,(err,result)=>
	{
		if(err)
		{
			console.log(err)
			res.send("error2")//throw err//res.send("error")
		}
		else
		{
			console.log("result----",result)
			res.send("restaurant data saved successfully")
		}
	})
			}
		}
	})
	// const sql1="INSERT INTO restaurant_info SET ?"  //VALUES (name,type,email,phone,address,city,zip)
	// connection.query(sql1,data,(err,result)=>
	// {
	// 	if(err)
	// 	{
	// 		console.log(err)
	// 		res.send("error")//throw err//res.send("error")
	// 	}
	// 	else
	// 	{
	// 		console.log("result----",result)
	// 		res.send("restaurant data saved successfully")
	// 	}
	// })
}

module.exports=save_restaurant_data
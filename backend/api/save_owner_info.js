const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const save_owner_data=(req,res)=>
{
	const name=req.body.owner_name;
	const restaurant_email=req.body.restaurant_email;
	const email=req.body.owner_email;
	const phone=req.body.owner_phone;
	const address=req.body.owner_address;
	const city=req.body.owner_city;
	const zip=req.body.owner_zip;
	const data = {
		"owner_name" : name,
		"restaurant_email" : restaurant_email,
		"owner_email" : email,
		"owner_phone" : phone,
		"owner_address" : address,
		"owner_city" : city,
		"owner_zip" : zip
	}
	console.log("incoming data is", data)
	connection.query("SELECT COUNT(*) AS count FROM restaurant_info WHERE restaurant_email = ? " ,email,(err,result)=>
	{
		if(err)
		{
			throw err//console.log("error1")
		}
		else
		{
			if(result[0].count<1)
			{
				res.send("Please provide valid restaurant_email as in restaurant_info")
			}
			else
			{
				const sql1="INSERT INTO owner_info SET ?"  //VALUES (name,type,email,phone,address,city,zip)
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
			res.send("owner data saved successfully")
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

module.exports=save_owner_data
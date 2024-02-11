const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())


const save_restaurant_menu=(req,res)=>
{
	const email=req.body.restaurant_email
	const name=req.body.restaurant_name
	const dish=req.body.dish_name
	const price=req.body.dish_price
	const quantity=req.body.dish_quantity
	const ingredients=req.body.dish_ingredients
	const data={
		"restaurant_email":email,
		"restaurant_name":name,
		"dish_name":dish,
		"dish_price":price,
		"dish_quantity":quantity,
		"dish_ingredients":ingredients
	}
	connection.query("SELECT COUNT(*) AS count FROM restaurant_info WHERE restaurant_email = ? " ,email,(err,result)=>
	{
		if(err)
		{
			res.send("save_restaurant_menu_1")//throw err//console.log("error1")
		}
		else
		{
			if(result[0].count<1)
			{
				res.send("Please provide valid restaurant_email as in restaurant_info")
			}
			else
			{
				const sql="INSERT INTO menu SET ?"
				connection.query(sql,data,(err,result)=>
				{
					if(err)
					{
						res.send("error occured in save_restaurant_menu_2")
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
module.exports=save_restaurant_menu
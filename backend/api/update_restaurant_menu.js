const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const update_restaurant_menu=(req,res)=>
{
	const name=req.body.restaurant_name
	const dish=req.body.dish_name
	const price=req.body.dish_price
	const quantity=req.body.dish_quantity
	const ingredients=req.body.dish_ingredients
	const email=req.params.restaurant_email
	connection.query("SELECT COUNT(*) AS count FROM working_time WHERE restaurant_email=?",email,(err,result)=>
	{
		if(err)
		{
			res.send("error")
		}
		else
		{
			if(result[0].count<1)
			{
				res.send("menu for this restaurant is not in the database")
			}
			else
			{
				const data=[name,dish,price,quantity,ingredients,email]
	const sql="UPDATE working_time SET restaurant_name=?, dish_name=?, dish_price=?, dish_quantity=?, ingredients=?  WHERE restaurant_email=?"
	connection.query(sql,data,(err,result)=>
	{
		if(err)
		{
			throw err//res.send("error")
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
module.exports=update_restaurant_menu
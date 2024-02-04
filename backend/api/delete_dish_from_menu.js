const express=require("express")
const connection=require("../database/configuration")
const app=express()
app.use(express.json())

const delete_dish_from_menu=(req,res)=>
{
	const dish=req.params.dish_name
	const email=req.body.restaurant_email
	const data=[email,dish]
	connection.query("SELECT COUNT(*)  AS count FROM menu WHERE restaurant_email=? AND dish_name=?",data,(err,result)=>
	{
		if(err)
		{
			res.send("error")
		}
		else
		{
			if(result[0].count<1)
			{
				res.send("menu or email does not exist in the database")
			}
			else
			{
				connection.query("DELETE FROM menu WHERE dish_name=?",dish,(err,result)=>
				{
					if(err)
					{
						res.send(err)
					}
					else
					{
						res.send(dish+" has been deleted from the database")
					}
				})
			}
		}
	})
}
module.exports=delete_dish_from_menu
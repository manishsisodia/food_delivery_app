const express=require("express")
const email_validator=require("email-validator")
const phone_validator=require("validate-phone-number-node-js")
const zip_validator=require("postal-codes-js")
const restaurant_menu_middleware=(req,res,next)=>
{
	 if(!req.body.restaurant_name || req.body.restaurant_name.trim()==="")
	 {
	 	res.send("Please provide Restaurant Name")	
		
	 }
	// else if(!req.body.restaurant_type || req.body.restaurant_type.trim()==="")
	// {
	// 	res.send("Please provide Restaurant type")
	// }
	else if(!req.body.restaurant_email || req.body.restaurant_email.trim()==="" || !(email_validator.validate(req.body.restaurant_email)))
	{
		res.send("Please provide Restaurant email")
	}
	else if(!req.body.dish_name || req.body.dish_name.trim()==="")
	{
		res.send("Please provide name of the dish")
	}
	else if(!req.body.dish_price || req.body.dish_price.trim()==="" || req.body.dish_price<1)
	{
		res.send("Please provide dish price")
	}
	else if(!req.body.dish_quantity || req.body.dish_quantity.trim()==="")
	{
		res.send("Please provide quantity of dish")
	}
	else if(!req.body.dish_ingredients || req.body.dish_ingredients.trim()==="")
	{
		res.send("Please provide ingredients of dish")
	}
	else
	{
		next()
	}
}
module.exports = restaurant_menu_middleware
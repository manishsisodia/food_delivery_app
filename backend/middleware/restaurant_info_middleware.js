const express=require("express")
const email_validator=require("email-validator")
const phone_validator=require("validate-phone-number-node-js")
const zip_validator=require("postal-codes-js")
const restaurant_info_middleware=(req,res,next)=>
{
	if(!req.body.restaurant_name || req.body.restaurant_name.trim()==="")
	{
		res.send("Please provide Restaurant Name")	
		
	}
	else if(!req.body.restaurant_type || req.body.restaurant_type.trim()==="")
	{
		res.send("Please provide Restaurant type")
	}
	else if(!req.body.restaurant_email || req.body.restaurant_email.trim()==="" || !(email_validator.validate(req.body.restaurant_email)))
	{
		res.send("Please provide Restaurant email")
	}
	else if(!req.body.restaurant_phone || req.body.restaurant_phone.trim()==="" || !phone_validator.validate(req.body.restaurant_phone) || req.body.restaurant_phone.length!=10)
	{
		res.send("Please provide Restaurant contact number")
	}
	else if(!req.body.restaurant_address || req.body.restaurant_address.trim()==="")
	{
		res.send("Please provide Restaurant address")
	}
	else if(!req.body.restaurant_city || req.body.restaurant_zip.trim()==="")
	{
		res.send("Please provide Restaurant city")
	}
	else if(!req.body.restaurant_zip || req.body.restaurant_zip.trim()==="" || !zip_validator.validate(req.body.restaurant_zip))
	{
		res.send("Please provide Restaurant zip")
	}
	else
	{
		next()
	}
}
module.exports = restaurant_info_middleware
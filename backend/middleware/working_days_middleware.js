const express=require("express")
const email_validator=require("email-validator")
const phone_validator=require("validate-phone-number-node-js")
const zip_validator=require("postal-codes-js")
const working_days_middleware=(req,res,next)=>
{
	if(!req.body.restaurant_name || req.body.restaurant_name.trim()==="")
	{
		res.send("Please provide Restaurant Name")	
		
	}
	else if(!req.body.restaurant_email || req.body.restaurant_email.trim()==="" || !(email_validator.validate(req.body.restaurant_email)))
	{
		res.send("Please provide Restaurant email")
	}
	else
	{
		next()
	}
}
module.exports=working_days_middleware
const express=require("express")
const email_validator=require("email-validator")
const phone_validator=require("validate-phone-number-node-js")
const zip_validator=require("postal-codes-js")
const owner_info_middleware=(req,res,next)=>
{
	if(!req.body.owner_name || req.body.owner_name.trim()==="")
	{
		res.send("Please provide Owner Name")	
		
	}
	else if(!req.body.owner_email || req.body.owner_email.trim()==="")
	{
		res.send("Please provide Owner email")
	}
	else if(!req.body.restaurant_email || req.body.restaurant_email.trim()==="" || !(email_validator.validate(req.body.restaurant_email)))
	{
		res.send("Please provide Restaurant email")
	}
	else if(!req.body.owner_phone || req.body.owner_phone.trim()==="" || !phone_validator.validate(req.body.owner_phone) || req.body.owner_phone.length!=10)
	{
		res.send("Please provide Owner contact number")
	}
	else if(!req.body.owner_address || req.body.owner_address.trim()==="")
	{
		res.send("Please provide owner address")
	}
	else if(!req.body.owner_city || req.body.owner_zip.trim()==="")
	{
		res.send("Please provide owner city")
	}
	else if(!req.body.owner_zip || req.body.owner_zip.trim()==="" || !zip_validator.validate(req.body.owner_zip))
	{
		res.send("Please provide owner zip")
	}
	else
	{
		next()
	}
}
module.exports = owner_info_middleware
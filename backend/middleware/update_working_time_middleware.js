const express=require("express")
const email_validator=require("email-validator")
const phone_validator=require("validate-phone-number-node-js")
const zip_validator=require("postal-codes-js")

function isValidateTime(str)
{
	let regex = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);
	if (str == null) {
        return false;
    }
    if (regex.test(str) == true) {
        return true;
    }
    else {
        return false;
    }
}

const working_time_middleware=(req,res,next)=>
{
	if(!req.body.restaurant_name || req.body.restaurant_name.trim()==="")
	{
		res.send("Please provide Restaurant Name")	
		
	}
	else if(!req.body.open_time || isValidateTime(req.body.open_time)==false)
	{
		res.send("Please provide the valid open time")
	}
	else if(!req.body.close_time || isValidateTime(req.body.close_time)==false)
	{
		res.send("Please provide valid closing time")
	}
	else
	{
		next()
	}
}
module.exports=working_time_middleware
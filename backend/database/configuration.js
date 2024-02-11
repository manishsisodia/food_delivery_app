const mysql=require("mysql")
const connection=mysql.createConnection({
	host:"localhost",
	user:"root",
	database:"food_delivery_app",
	password:"**********"
	//multipleStatements:false
})
connection.connect((err)=>
{
	if(err)
	{
		console.log("error in configuration")
	}
	else
	{
		console.log("connected")
	}
})
module.exports=connection
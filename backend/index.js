const express=require("express")

//------------------Database-Configuration-----------------------------------------------------

const connection=require("./database/configuration")

//-----------------middlewares-----------------------------------------------------------------

const restaurant_info_middleware=require("./middleware/restaurant_info_middleware")     // rest_info
const owner_info_middleware=require("./middleware/owner_info_middleware")               // owner_info
const menu_middleware=require("./middleware/menu_middleware")                           // menu_info
const working_days_middleware=require("./middleware/working_days_middleware")           // working_days
const working_time_middleware=require("./middleware/working_time_middleware")
const update_working_time_middleware=require("./middleware/update_working_time_middleware")
const update_restaurant_menu_middleware=require("./middleware/update_restaurant_menu_middleware")

//---------------------------POST APIs---------------------------------------------------------

const save_restaurant_data=require("./api/restaurant")
const save_owner_data=require("./api/save_owner_info")
const save_restaurant_menu=require("./api/save_restaurant_menu")
const working_days=require("./api/working_days")
const working_time=require("./api/working_time")

//--------------------------GET APIs------------------------------------------------------------

const get_restaurant_info=require("./api/retrieve_restaurant_info")
const get_owner_info=require("./api/retrieve_owner_info")
const retrieve_restaurant_menu=require("./api/retrieve_restaurant_menu")
const get_working_days=require("./api/get_working_days")
const get_working_time=require("./api/get_working_time")

//---------------------------PUT APIs------------------------------------------------------------

const update_restaurant_menu=require("./api/update_restaurant_menu")
const update_working_time=require("./api/update_working_time")
const update_working_days=require("./api/update_working_days")

//-----------------------------DELETE APIs--------------------------------------------------------

const delete_dish_from_menu=require("./api/delete_dish_from_menu")

const app=express()
app.use(express.json())
const PORT=5000

//--------------------------GET APIs-------------------------------------------------------------

app.get("/get_restaurant_info",(req,res)=>
{
	get_restaurant_info(req,res)
})

app.get("/get_owner_info",(req,res)=>
{
	get_owner_info(req,res)
})

app.get("/retrieve_restaurant_menu",(req,res)=>
{
	retrieve_restaurant_menu(req,res)
})

app.get("/get_working_days",(req,res)=>
{
	get_working_days(req,res)
})

app.get("/get_working_time",(req,res)=>
{
	get_working_time(req,res)
})

//--------------------------------POST APIs-------------------------------------------------------

app.post("/save_restaurant_info",restaurant_info_middleware,(req,res)=>
{
	//const formdata=req.body

	save_restaurant_data(req,res)
})

app.post("/save_owner_info",owner_info_middleware,(req,res)=>
{
	save_owner_data(req,res)
})

app.post("/save_restaurant_menu",menu_middleware,(req,res)=>
{
	save_restaurant_menu(req,res)
})

app.post("/working_days",working_days_middleware,(req,res)=>
{
	working_days(req,res)
})

app.post("/working_time",working_time_middleware,(req,res)=>
{
	working_time(req,res)
})

//---------------------------------PUT APIs-------------------------------------------------------

app.put("/update_working_time/:restaurant_email",update_working_time_middleware,(req,res)=>
{
	update_working_time(req,res)
})

app.put("/update_working_days/:restaurant_email",(req,res)=>
{
	update_working_days(req,res)
})

app.put("/update_restaurant_menu/:restaurant_email",update_restaurant_menu_middleware,(req,res)=>
{
	update_restaurant_menu(req,res)
})

//-------------------------------DELETE APIs------------------------------------------------------

app.delete("/delete_dish_from_menu/:dish_name",(req,res)=>
{
	delete_dish_from_menu(req,res)
})


app.listen(PORT,()=>
{
	console.log("Server is listening on "+PORT)
})
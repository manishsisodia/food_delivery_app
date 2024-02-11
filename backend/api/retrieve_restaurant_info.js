const express=require("express")
const connection=require("../database/configuration")



const redis=require("redis")   //  npm i redis@3.0.0  will give error on version 4
const util=require("util")
const redisUrl="redis://127.0.0.1:6379"
const client=redis.createClient(redisUrl)
client.set=util.promisify(client.set)
client.get=util.promisify(client.get)


const app=express()
app.use(express.json())

const get_restaurant_info= async (req,res)=>
{
	const {id}=req.params
	const inCached=await client.get(id)
	if(inCached != null)
	{
		console.log("found in redis")
		res.send(JSON.parse(inCached))

	}
	else
	{
		const sql="SELECT * FROM restaurant_info"
		connection.query(sql, async (err,result)=>
		{
			if(err)
			{
				res.send("sorry, Error occured in restaurant_info")
			}
			else
			{
				const response=await client.set(id,JSON.stringify(result),"Ex",60)
				console.log("result from db",id,result)
				res.send(result)
			}
		})
	}
	
}
module.exports=get_restaurant_info
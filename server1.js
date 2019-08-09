let rp = require('request-promise')
let url = 'http://localhost:5000/'
setInterval(()=>{
	let vrp = rp(url)
	vrp.then((html)=>{
		console.log(html)
	}).catch((err)=>{console.log(err)})
},3000)
let express = require('express')
let app = express()
let fs = require('fs')
let bodyParser = require('body-parser')
app.use(express.static('./public'))
app.use(bodyParser())
app.get('/',(req,res)=>{
	res.sendFile(__dirname + './public/index.html')
})
app.get('/text',(req,res)=>{
	fs.readFile('./public/text.txt','utf8',(err,data)=>{
		res.send(data)
	})
})
app.post('/',(req,res)=>{
	fs.writeFile('./public/text.txt',req.body.text)
})
app.listen(3000,()=>{console.log('start server')})
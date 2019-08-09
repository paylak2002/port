let rp = require('request-promise')
let url = 'http://localhost:3000/text'
let text = ''
let express = require('express')
let app = express()
app.use(express.static('./publicPatasxan'))
setInterval(()=>{
	let vrp = rp(url)
	vrp.then((html)=>{
		console.log(html)
		if(html == 'inchx es'){
			text = 'lav em'
		}
		else{
			text = 'patasxan chka'
		}
	}).catch((err)=>{console.log(err)})
},3000)
app.get('/',(req,res)=>{
	res.send(text)
})
app.listen(5000,()=>{console.log('start Server port:5000')})
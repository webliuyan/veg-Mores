const userRouter=require("../routes/router.js");
const express=require('express');
var app=express();
app.listen(3000);
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(express.static("public"));
app.use("router",router);
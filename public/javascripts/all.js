var express=require("express"),router=express.Router();router.get("/",function(e,r){r.render("index",{title:"Brandon Parmley Learning One Competency at a Time"})}),router.post("/",function(e,r){r.json({userName:e.body.userName,email:e.body.email})}),module.exports=router;var express=require("express"),router=express.Router();router.get("/",function(e,r){var o={name:"Brandon",age:"30",job:"Web Front End Architect and Web Developer",competencies:"HTML5, CSS3, JavaScript, jQuery, Bootstrap, Joomla, Wordpress, Omni Update Campus Edition"};r.send(o)}),router.get("/post",function(e,r){r.send("No data provided, try again...")}),router.post("/post",function(e,r){r.render("post",{name:e.body.name,age:e.body.age,job:e.body.job,competencies:e.body.competencies})}),module.exports=router;
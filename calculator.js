const express=require("express");
const app=express();
const BodyParser=require("body-parser");
app.use(BodyParser.urlencoded({extended:true}));
app.get("/",function(request,response)
{
response.sendFile(__dirname +  "/index.html");

}
);
app.post("/",function(request,response)
{
  var num1=Number(request.body.Number1);
  var num2=Number(request.body.Number2);
  var result=num1+num2;
  console.log(request.body)
  response.send("the sum of number is "+result);
});
app.listen(3000,function()
{
  console.log("Server is on ,on the requested port");

});

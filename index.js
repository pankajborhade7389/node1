const http =require("http");
const server = http.createServer(function(req,res){
    res.write("<h1>Welcome to Node js</h1>");
    res.write("This is first HTTP server assignment</br></br>")
    res.write(JSON.stringify({Name:"Pankaj"}));
    res.end()
})
server.listen(4000);
import { readFile } from "fs"; 

readFile("./db/posts.json", function(err, data) { 
    
    if (err) throw err; 

    const users = JSON.parse(data); 
    
    console.log(users.map(user => user.img)); 
});
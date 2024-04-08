const fs = require ("fs");

// fs.writeFile("message.txt", "hello from Dnyaneshwar" , err => {
//     if (err) throw err;
//     console.log("File has been Saved !");
// });

fs.readFile('./message.txt',"utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
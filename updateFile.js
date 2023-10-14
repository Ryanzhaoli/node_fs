const fs = require("fs");

let appendContents = " Have a greate day, World!";

fs.appendFile("./HelloWorld.txt", appendContents, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Successfully updated file.");
    }
});
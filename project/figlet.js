var figlet = require('figlet')

figlet('SCINIC', function (err, data) {
    if (err) {
        console.log("wrong");
        console.dir(err)
        return;
    }
    console.log(data)
})
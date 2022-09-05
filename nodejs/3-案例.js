const fs = require('fs')
fs.readFile(__dirname + '/index.html', 'utf8', function (err, dataStr) {
    if (err) console.log(err);
    else {

        // var str1 = dataStr.split('<style>')
        // var str2=str1[1].split('</style>')
        // var str3=str2[1].split('<script>')
        // var str4=str3[1].split('</script>')


        // var html=str1[0]+'<link rel="stylesheet" href="./index.css">'+str3[0]+str4[1]+'<script src="./index.js"></script>'
        // var css=str2[0]
        // var js=str4[0]

        
        const regcss=/<style>[\s\S]*<\/style>/
        const regjs=/<script>[\s\S]*<\/script>/


        var css=regcss.exec(dataStr)
        var c=css[0].replace('<style>','').replace('</style>','')

        var js=regjs.exec(dataStr)
        var j=js[0].replace('<script>','').replace('</script>','')

        var html=dataStr.replace(regcss,'<link rel="stylesheet" href="./index.css">').replace(regjs,'<script src="./index.js"></script>')
        
        

        fs.writeFile('./clock/index.html', html, function (err) {
            if (err) console.log(err);
        })
        fs.writeFile('./clock/index.css', c, function (err) {
            if (err) console.log(err);
        })
        fs.writeFile('./clock/index.js', j, function (err) {
            if (err) console.log(err);
        })
    }
})
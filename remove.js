let fs = require('fs');

let name = process.argv[2];

(function() {
    let list = ['vue','html','css','js','json'];
    for (var i = 0; i < list.length; i++) {
        let type = list[i];
        let dir;
        if (type == 'json') {
            dir = 'lang';
        } else {
            dir = type;
        }
        fs.readFile('./src/components/'+dir+'/'+name+'.'+type , '' , function(err){
            if (err) {
                console.log('当前'+type+'文件不存在！')
            } else {
                fs.unlink('./src/components/'+dir+'/'+name+'.'+type, function () {
                    console.log(type+'文件删除成功！')
                });
            }
        });
    }
})();
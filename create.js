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
                create(type);
            } else {
                console.log('当前'+type+'文件已存在！')
                return;
            }
        });
    }
})();


function create (type) {
    // 创建vue
    type == 'vue' && fs.appendFile('./src/components/vue/'+name+'.vue','<template src="../html/'+name+'.html"></template>\n<script src="../js/'+name+'.js"></script>\n<style scoped src="../css/'+name+'.css"></style>\n<i18n src="../lang/'+name+'.json"></i18n>','utf8',function(err){
        if(err) console.log(err);
        console.log('创建vue成功！')
    });
    // 创建html
    type == 'html' && fs.appendFile('./src/components/html/'+name+'.html','<div class="'+name+'"></div>','utf8',function(err){
        if(err) console.log(err);
        console.log('创建html成功！')
    });
    // 创建css
    type == 'css' && fs.appendFile('./src/components/css/'+name+'.css','','utf8',function(err){
        if(err) console.log(err);
        console.log('创建css成功！')
    });
    // 创建js
    type == 'js' && fs.appendFile('./src/components/js/'+name+'.js','const root = {};\nroot.name = ' + name + ';\nroot.data = function () {\nreturn{\n}\n};\nroot.created = function () {\n};\nexport default root;','utf8',function(err){
        if(err) console.log(err);
        console.log('创建js成功！')
    });// 创建json
    type == 'json' && fs.appendFile('./src/components/lang/'+name+'.json','{\n"en":{\n},\n"ch":{\n}\n}','utf8',function(err){
        if(err) console.log(err);
        console.log('创建json成功！')
    });
}
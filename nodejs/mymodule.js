var fs=require('fs')
var path=require('path')
function mymodule(lib,filter,callback){
  fs.readdir(arg1,function (err,list){
    if(err){
    return callback(err)
    }
    for(var i=0;i<list.length;i++){
      if(path.extname(list[i])=='.'+arg2){
      console.log(list[i]);
      }
    }
    callback(null,list)
  })
}
module.exports=mymodule;

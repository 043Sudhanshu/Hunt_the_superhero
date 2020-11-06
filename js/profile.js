
var obj=localStorage.getItem("temp");

var object=JSON.parse(obj);
console.log(object);

var p=0;
setInterval(function(){
$('#pic').css('transform',`rotate(${p}deg)`);
p++;
},50);
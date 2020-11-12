
var obj=localStorage.getItem("temp");

var object=JSON.parse(obj);
console.log(object);

$('#name').text(object.name);
$('#pic>img').attr('src',object.image.url);
setTimeout(function(){
$('.power').width(object.powerstats.power+"%");
$('.combat').width(object.powerstats.combat+"%");
$('.intelligence').width(object.powerstats.intelligence+"%");
$('.speed').width(object.powerstats.speed+"%");
$('.strength').width(object.powerstats.strength+"%");
$('.durability').width(object.powerstats.durability+"%");
},500);


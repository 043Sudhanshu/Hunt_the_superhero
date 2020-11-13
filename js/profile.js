
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

$('.height').text(object.appearance.height[0]);
$('.eye').text(object.appearance['eye-color']);
$('.gender').text(object.appearance.gender);
$('.weight').text(object.appearance.weight[1]);
$('.hair').text(object.appearance['hair-color']);

$('.base').text(object.work.base);
$('.occupation').text(object.work.occupation);

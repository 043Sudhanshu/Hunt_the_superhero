
var obj=localStorage.getItem("temp");

var object=JSON.parse(obj);
console.log(object);
var obj=localStorage.getItem("temp");

var object=JSON.parse(obj);

document.getElementById('name').innerText=object.name;
document.querySelector('#pic>img').setAttribute('src',object.image.url);

setTimeout(function(){
document.getElementsByClassName('power')[0].style.width=object.powerstats.power+"%";
document.getElementsByClassName('combat')[0].style.width=object.powerstats.combat+"%";
document.getElementsByClassName('intelligence')[0].style.width=object.powerstats.intelligence+"%";
document.getElementsByClassName('speed')[0].style.width=object.powerstats.speed+"%";
document.getElementsByClassName('strength')[0].style.width=object.powerstats.strength+"%";
document.getElementsByClassName('durability')[0].style.width=object.powerstats.durability+"%";
},500);

document.getElementsByClassName('height')[0].innerText=object.appearance.height[0];
document.getElementsByClassName('eye')[0].innerText=object.appearance['eye-color'];
document.getElementsByClassName('gender')[0].innerText=object.appearance.gender;
document.getElementsByClassName('weight')[0].innerText=object.appearance.weight[1];
document.getElementsByClassName('hair')[0].innerText=object.appearance['hair-color'];

document.getElementsByClassName('base')[0].innerText=object.work.base;
document.getElementsByClassName('occupation')[0].innerText=object.work.occupation;



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

(function(){
     let search=document.getElementById('name');
     let searchResults=document.getElementById('cards');
     
 search.onkeypress=function(){
   var name=search.value;
   $('#cards').text("");
    var xhttp = new XMLHttpRequest(); 
    xhttp.open("get",`https://www.superheroapi.com/api.php/3509711479121402/search/${name}`, true);
    xhttp.send();
    xhttp.onload = function() {   
     
        let result=JSON.parse(xhttp.response);
       
       if(result.response==='success'){
                let array=result.results;
                let i=1;
                for(obj of array){
                    if(i===10){
                        break;
                    }
                    $('#cards').append(`
                  
                    <div class='card' id='id${obj.id}' onclick='setprofile(${obj.id})'>
                    
                            <div class='hero' style="display:none">${JSON.stringify(obj)}</div>

                            <a href='./profile.html'>  
                                <img src='${obj.image.url}'>
                             
                                <div class='cardName'>
                                        ${obj.name}
                                        
                                    </div>
                                </a>
                               <div class='favSign' onclick='AddToFav(${obj.id})' >
                                <b>&nbsp; + &nbsp; </b>
                               </div> 
                   </div> 
                  
                    `);
                i=i+1;
                }
       }
    
};
    
 }

 
     
})();

var temp;

function setprofile(cardId){
    var string="id"+cardId;
    var obj=$("#"+string+" "+".hero").text();
    
    localStorage.setItem("temp",obj);
  }


  var str='Hi i am sudhanshu chauhan.I am using superhero api from which i am fetching all the details of selected super hero,just type the name of superhero above and enjoy :)';
  var l=0;
 var interval= setInterval(function(){
        if(l==str.length){
            clearInterval(interval);
        }
        $('#details>h4').text(str.substring(0,l)+"|");
        l++;
  },70);


   setInterval(() => {
     var input=  $('input').val();
       if(input!==""){
        $('#home').hide();
        $('#cards').show();
       }else{
        $('#cards').hide();
        $('#home').show();    
       }
   }, 500);


function AddToFav(data){
 var fav=$('#id'+data+" "+'.hero').text();
 var t=JSON.parse(fav);
 var Arr=JSON.parse(localStorage.getItem('arr'));
 Arr.push(t);
 $('#notification').css('opacity','1');
 setTimeout(function(){
    $('#notification').css('opacity','0');
 },2000);
 localStorage.setItem('arr',JSON.stringify(Arr));
}

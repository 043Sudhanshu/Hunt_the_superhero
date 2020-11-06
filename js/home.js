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


  var str='Hi i am sudhanshu chauhan .i have used an superhero api by which i am fetching all the details of selected super hero jus typ the name of superhero above and enjoy :)';
  var l=0;
 var interval= setInterval(function(){
        if(l==str.length){
            clearInterval(interval);
        }
        $('#details>h4').text(str.substring(0,l)+"|");
        l++;
  },70);
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

                            <img src='${obj.image.url}'>
                                    <div class='cardName'>
                                        ${obj.name}
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
    temp=JSON.parse(obj);
    console.log(temp);
  }
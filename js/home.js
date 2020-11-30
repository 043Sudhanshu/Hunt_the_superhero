(function(){
    //fetching the input element
     let search=document.getElementById('name');
     let searchResults=document.getElementById('cards');
    
     //when we press the key on search bar this function will be called
     //and it will send req to api and api will return an array of objects

 search.onkeypress=function(){
   var name=search.value;
   document.getElementById('cards').innerText="";
    var xhttp = new XMLHttpRequest(); 
    xhttp.open("get",`https://www.superheroapi.com/api.php/3509711479121402/search/${name}`, true);
    xhttp.send();
    xhttp.onload = function() {   
     // will parse the response to json
        let result=JSON.parse(xhttp.response);
       //if response is success take the array out of it and 
       //append the card div with all the details from the array
       if(result.response==='success'){
                let array=result.results;
                let i=1;
                for(obj of array){
                    if(i===10){
                        break;
                    }
                    document.getElementById('cards').innerHTML+=`
                    <div class='card' id='id${obj.id}' onclick='setprofile(${obj.id})' ontouch='setprofile(${obj.id})'>
                    
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
                    `;
                i=i+1;
                }
       }
    
};
    
 }

 
     
})();

var temp;

//when we click on any superhero after searching it will put it in local storage
function setprofile(cardId){
    var obj=document.querySelector("#id"+cardId+" "+".hero").innerText;
    localStorage.setItem("temp",obj);
  }


  var str='Hi i am sudhanshu chauhan.I am using superhero api from which i am fetching all the details of selected super hero,just type the name of superhero above and enjoy :)';
  var l=0;
 var interval= setInterval(function(){
        if(l==str.length){
            clearInterval(interval);
        }
        document.querySelector('#details>h4').innerText=str.substring(0,l)+"|";
        l++;
  },70);


   setInterval(() => {
     var input=  document.getElementsByTagName('input')[0].value;
       if(input!==""){
        $('#home').hide();
        $('#cards').show();
       }else{
        $('#cards').hide();
        $('#home').show();    
       }
   }, 500);


function AddToFav(data){
 var fav=document.querySelector('#id'+data+" "+'.hero').innerText;
 var t=JSON.parse(fav);
 var Arr=JSON.parse(localStorage.getItem('arr'));
 Arr.push(t);
 localStorage.setItem('arr',JSON.stringify(Arr));

  document.getElementById('notification').style.opacity=1;
 setTimeout(function(){
    document.getElementById('notification').style.opacity=0;
},2000);
}


var arr=JSON.parse(localStorage.getItem('arr'));


for(let i=0;i<arr.length;i++){

       document.getElementById('list').innerHTML+=
       ` <div class='hero-${arr[i].id} common' > 
            
                    <img src='${arr[i].image.url}'>
                    <div class='clear' onclick='Delete(${arr[i].id})' ontouch='Delete(${arr[i].id})'>
                        <i class="fa fa-trash"></i>
                    </div>
        
                    <div class='name'>
                    ${arr[i].name}
                    </div>
        
                    </div>
                </div>
        `;
}

function Delete(id){
    document.querySelector('.hero-'+id).remove();   //will remove from the html first and then from arr of local storage
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==id){
           arr.splice(i,1);
           localStorage.setItem('arr',JSON.stringify(arr));
           break;
        }
    }
}

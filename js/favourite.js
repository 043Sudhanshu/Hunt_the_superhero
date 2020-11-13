
var arr=JSON.parse(localStorage.getItem('arr'));


for(let i=0;i<arr.length;i++){
    $('#list').append(
       `
        <div class='hero-${arr[i].id} common' > 
            
                    <img src='${arr[i].image.url}'>
                    <div class='clear' onclick='Delete(${arr[i].id})'>
                        <i class="fa fa-trash"></i>
                    </div>
        
                    <div class='name'>
                    ${arr[i].name}
                    </div>
        
                    </div>
                </div>
        `
    );
}

function Delete(id){
    $('.hero-'+id).remove();
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==id){
           arr.splice(i,1);
           localStorage.setItem('arr',JSON.stringify(arr));
           break;
        }
    }
}
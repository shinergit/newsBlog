let Titlearray = (localStorage.getItem("Titlearray")) ? (localStorage.getItem("Titlearray")).split(',') : [];
let Descriptionarray = (localStorage.getItem("Descriptionarray")) ? (localStorage.getItem("Descriptionarray")).split(',') : [];

let PostCard = '';
function ShowPost(){
    
    if (Titlearray.length >0 ){
       
        for (i = 0 ; i < Titlearray.length ; i++) 
        {
            PostCard+= ("<div class='card  border-success mb-3 col-md-4 col-lg-3' style='margin : 1%'><div class='card-header bg-transparent border-success'><h2><span>"+ Titlearray[i]+ "</span></h2></div><div class='card-body text-success'><p class='card-text'>"+Descriptionarray[i]+"</p></div></div>");
          
        }
    }
    else {
        PostCard="<table border=1 width=100%><tr>No Article Found!!!!</tr></table>"
    }
      document.getElementById("MyPost").innerHTML = PostCard;


}
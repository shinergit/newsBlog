
let Titlearray = (localStorage.getItem("Titlearray")) ? (localStorage.getItem("Titlearray")).split(',') : [];
let Descriptionarray = (localStorage.getItem("Descriptionarray")) ? (localStorage.getItem("Descriptionarray")).split(',') : [];

let PostCard = '';
alert = function(message) {
    $('#alertpopup').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
}
alert = function(message) {
    $('#alertpopup').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
}
function AddPost(){
     var Title = document.post_form.BlogHeader;
     var Description = document.post_form.PostDesciption;  

     Titlearray.push(Title.value);
     Descriptionarray.push(Description.value);
     localStorage.setItem("Titlearray", Titlearray);
     localStorage.setItem("Descriptionarray", Descriptionarray);
     alert('Post Added Successfully!!!');
    
}


var i; 
function AllPost()
 {
     if (Titlearray.length >0 ){
     var ExpnTable = "<table  width=50%><tr><th>Id</th><th>Title</th><th>Value</th><th>Action</th></tr>"
     
     for (i = 0 ; i < Titlearray.length ; i++) 
     {
         ExpnTable+= ("<tr><td>"+(i+1)+"</td><td>"+Titlearray[i]+"</td><td>"+Descriptionarray[i]+"</td><td><button  id='Del' onclick=Delete("+i+")>D</button></td><td><button id='Upd' onclick=Update("+i+")>U</button></td></tr>");
         
     }
    
     ExpnTable+='</table>'
 }
 else {
     ExpnTable="<table border=1 width=100%><tr>No Data Found!!!!</tr></table>"
 }
   document.getElementById("MyAllPost").innerHTML = ExpnTable;
 }

 //For Delete
 function Delete(i)
 {
    
     let text = "You Want to Post Post "+(i+1);
     
     if (confirm(text) == true) {
         Titlearray.splice(i, 1);
         Descriptionarray.splice(i, 1);
         localStorage.removeItem("Titlearray");
         localStorage.removeItem("Descriptionarray");
         localStorage.setItem("Titlearray", Titlearray);
         localStorage.setItem("Descriptionarray", Descriptionarray);
         
         AllPost();
     } else {
        alert('Canceled !!!');
     }
 }

//For Update
 function Update(i)
 {
    
     let text = "You Want to Update Post "+(i+1);
     
     if (confirm(text) == true) {
         Titlearray.splice(i, 1);
         Descriptionarray.splice(i, 1);
         
         AllPost()
     } else {
        alert('Canceled !!!');
     }
 }

 
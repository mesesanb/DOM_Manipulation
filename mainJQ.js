
$(document).ready(function(){
    
 var istext = /^[a-zA-ZăîșțâĂÎȘȚÂ]+$/ ; //variabila globala pentru verificare text - eroare si daca se introduce spatiu ex "laura "  */

//document.getElementById("submit").addEventListener("click", click);
$("#submit").click(click);

function click(){
   var fname = $("#fn").val();
   var lname = $("#ln").val();
   var mesaj = $("#mesaj").val();
   $("#fn, #ln, #mesaj").removeClass("txtbxred"); //campurile de 
   $("#fn, #ln, #mesaj").addClass("txtbx");//citire se pun pe contur negru
   $("#thanks").removeClass("txton").addClass("txtoff");//bara verde de sus este inchisa 
   
        if (!fname.match(istext) || !lname.match(istext) || mesaj ==="" || mesaj === "Your message here..."){ //verifica daca se introduc orice alte caractere inafara de  litere
            if (!fname.match(istext)){
                $("#fn").addClass("txtbxred"); //border red error 
                $("#fn").focus(); //focus pe eroare
            }
            if (!lname.match(istext)){
                $("#ln").addClass("txtbxred"); //border red error 
                $("#ln").focus(); //focus pe eroare
               
            }
            if (mesaj === "" || mesaj === "Your message here..."){
                $("#mesaj").addClass("txtbxred"); //border red error 
                $("#mesaj").focus(); //focus pe eroare
            }
            
        } else {
            
            var sex = $('input[name="sex"]:checked').val();
            var mesaj = $("#mesaj").val();
            console.log("First Name: ", fname);
            console.log("Last Name: ", fname);
            console.log("Sex: ", sex);
            console.log("Mesaj: ", mesaj);
                $("#thanks").removeClass("txtoff").addClass("txton");
                $("#firstname").text(fname); //scrie numele in bara verde
                $("#x").click(function(){ //verifica daca se apasa X-ul din bara verde
                    $("#thanks").removeClass("txton").addClass("txtoff");//inchide bara verde
                    $("#formular").trigger("reset"); //reseteaza formularul
                                
                });
            }
}


}); //load
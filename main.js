window.addEventListener("load", function() {
    

var istext = /^[a-zA-ZăîșțâĂÎȘȚÂ]+$/ ; //variabila globala pentru verificare text - eroare si daca se introduce spatiu ex "laura "  */

document.getElementById("submit").addEventListener("click", click);

function click(){
    
   var fname = document.getElementById("fn").value;
   var lname = document.getElementById("ln").value;
   var mesaj = document.getElementById("mesaj").value
   document.getElementById("fn").className = "txtbx";//pp ca introduce text
   document.getElementById("ln").className = "txtbx";
   document.getElementById("mesaj").className = "txtbx";

        if (!fname.match(istext) || !lname.match(istext) || mesaj ==="" || mesaj === "Your message here..."){ //verifica daca se introduc orice alte caractere inafara de  litere
            if (!fname.match(istext)){
                document.getElementById("fn").className = "txtbxred"; //border red error 
                document.getElementById("fn").focus(); //focus pe eroare
            }
            if (!lname.match(istext)){
                document.getElementById("ln").className = "txtbxred"; //border red error
                document.getElementById("ln").focus(); //focus pe eroare
            }
            if (mesaj === "" || mesaj === "Your message here..."){
                document.getElementById("mesaj").className = "txtbxred";
                document.getElementById("mesaj").focus();
            }
            
        } else {
            var sex = document.querySelector('input[name="sex"]:checked').value;    //jQuery $('input[name="sex"]:checked').val();
            var mesaj = document.getElementById("mesaj").value;
            console.log("First Name: ", fname);//
            console.log("Last Name: ", fname);
            console.log("Sex: ", sex);
            console.log("Mesaj: ", mesaj);
            document.getElementById("thanks").setAttribute('class','txton');
            document.getElementById("firstname").innerHTML = fname; //scrie numele in bara verde
            document.getElementById("x").addEventListener("click", function(){ //verifica daca se apasa X-ul din bara verde
                document.getElementById("thanks").setAttribute('class','txtoff'); //inchide bara verde
                document.getElementById("formular").reset(); //reseteaza formularul
                
            });
            }
}


}); //load
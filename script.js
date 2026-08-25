const buton=document.getElementById("mesajButonu");
const mesaj=document.getElementById("mesaj");



let tiklamaSayisi=0;
buton.addEventListener("click",function(){
    tiklamaSayisi++;
    mesaj.textContent="Buton "+tiklamaSayisi+" kez tıkladın!";

});
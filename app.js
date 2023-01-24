 
  // deklarimi i counter ku do te shfaqet numerimi
 let counter = 0;
 

//  marrja e buttonit permes id , duke perdorur metoden onclick ku pas klikimit aktivizohet funksioni

 document.getElementById("increase").onclick = function(){
    counter += 1;  // e rrrit vleren e numerimit per 1
    document.getElementById("count").innerHTML = counter;   
    ndrrimingjyres() // thirrja e funksionit e cila nderron ngjyren pas kalimit ne nje if statement
 }



 document.getElementById("decrease").onclick = function(){
    counter -= 1;
    document.getElementById("count").innerHTML = counter;
    ndrrimingjyres()
 }



 document.getElementById("reset").onclick = function(){
    counter = 0;
    document.getElementById("count").innerHTML = counter;
    ndrrimingjyres()
 }
  
    // funksioni  i cili ka nje if statement per te vendosur ngjyren e numerimit (nese numri eshte negativ kemi ngjyren e kuqe etj)
  function ndrrimingjyres() {
    if (counter > 0) {
        document.getElementById("count").style.color = "#228B22";
      }
       else if (counter < 0) {
        document.getElementById("count").style.color = "#E32636";
      }
      else {
        document.getElementById("count").style.color = "black";

      }
  }

      // krijimi i audio i cili ne momentin qe klikojm nje button merr audion nga ky source
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  const buttons = document.querySelectorAll("button");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
      audio.currentTime = 0;
    });
  });


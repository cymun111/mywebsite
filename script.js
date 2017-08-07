function myFunction (){
  var x=document.getElementById("textBox").value;
  var averageWords = 0;
  var spaceCounter = 0;
  var sentenceCounter = 0;
  var wordCounter = 0;
  for(var i=0; i<=x.length;i++)
  {if (x[i] == " "){ spaceCounter++; wordCounter++;}
  if (x[i] == "."|| x[i] == "!" || x[i] == "?"){ sentenceCounter++; wordCounter++;}}
  averageWords = wordCounter/sentenceCounter;
document.getElementById("row1").innerHTML = "There are " + wordCounter + " words in this text.";
document.getElementById("row2").innerHTML = "There are " + sentenceCounter + " sentences in this paragragh.";
document.getElementById("row3").innerHTML = "There are " + spaceCounter + " spaces in this text.";
document.getElementById("row4").innerHTML = "There are and average of" + " "+ averageWords+" " + "words in each sentence.";
}

function myNextFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

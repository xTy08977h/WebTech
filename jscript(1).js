
function calculator() {
  var val1= parseInt(document.querySelector('#value1').value);
  var val2= parseInt(document.querySelector('#value2').value);

  var calc1;
  val2=val2*.01;
  calc1=val1/(val2*val2);
  calc1 = calc1.toFixed(2);

   document.querySelector('#ep').innerHTML ="Your BMI is: " + calc1;
   if(calc1<18.5){
     document.querySelector('#result').innerHTML = "You are underweight! Maintain a good diet <br> plan and see a doctor if you are feeling weak.";
   }
   else if(calc1>=18.5 && calc1<=25){
     document.querySelector('#result').innerHTML = "You are normal! Good Job!";
   }
   else if(calc1>=26 && calc1<=30){
     document.querySelector('#result').innerHTML = "You are overweight! Maintain a good diet <br> plan and do more exercise.";
   }
   else if(calc1>=31 && calc1<=40){
     document.querySelector('#result').innerHTML = "You are obese! You are advised to see the doctor now!!!";
   }
   else{
     document.querySelector('#result').innerHTML = "Invalid input!<br>";
   }
}

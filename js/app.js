$(document).ready(
    console.log('aditya singh'),

   

   

)

var count = 0;

function increment(value) {
   

    var num = value;
     console.log(value);
     count++;
     switch(num) {
        case "1":

        console.log('aditya')
        $('.stepperFrame1').css("display", "none");
        console.log('aditya')
        $('.stepperFrame2').css("display", "block");
       
          break;
        case "2":
        
          break;
        default:
          text = "I have never heard of that fruit...";
      }
    
   

  console.log(count);

}

function decrement(){

    $('.stepperFrame1').css('display:block;');
    $('.stepperFrame2').css('display:none;')
  
  count--

  console.log(count);
}


document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  //console.log(answerPTagWithValue)
  var dNum = parseInt(answerPTagWithValue.innerHTML); //makes integer a number
  //console.log(dNum)
  var doubleNum = parseInt(dNum, 10) * 2; // doubles
  //console.log(doubleNum)
  answerPTagWithValue.innerHTML = doubleNum
})
document.querySelector("#color-circle button").addEventListener('click',function(){
   //TASK #3
 var answerChangeButtonColor = document.querySelector('#circle-bw');
   if(answerChangeButtonColor.style = "background === rgb(255,255,255)"){ // determines background color
      answerChangeButtonColor.style = "background: rgb(000,000,000)"; // changes background color to black
   }else if(answerChangeButtonColor.style = "background === rgb(000,000,000)"){ //determines background color
      answerChangeButtonColor.style = "background: rgb(255,255,255)";} //changes background color to white
   answerChangeButtonColor.innerHTML;

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  //TASK #4
var increaseCircleSizeEl = document.querySelector('.circle-red');
var computedStyle = window.getComputedStyle(increaseCircleSizeEl) //get the computed styles from .circle-red
//console.log(computedStyle)
var widthIncrease = computedStyle.width;  //comupted style of the width
var heightIncrease = computedStyle.height; //computed style of the height
var widthIncreaseEl = widthIncrease.slice(0, -2); //remove the 'px' from the width
var heightIncreaseEl = heightIncrease.slice(0, -2); //remove the 'px' from the height
//console.log(widthIncreaseEl), console.log(heightIncreaseEl)
var widthIncreaseFinal = 40;
var heightIncreaseFinal = 40;
for(var i = 1; i < widthIncreaseEl.length; i++ ){ // for loop to increase the size of circle
 var circleSize = widthIncreaseEl //evaulates circle size
 //console.log(circleSize)
      if(circleSize > 320){
         var widthIncreaseFinal = parseInt(widthIncreaseEl * 2); // double the circle width
         var heightIncreaseFinal = parseInt(heightIncreaseEl * 2);//double the circle height
         //console.log(widthIncreaseFinal, heightIncreaseFinal)
      }else{
       widthIncrease = widthIncreaseEl + "px" ; // return to 40
       heightIncrease = widthIncreaseEl + "px"; // return to 40
       //console.log(widthIncreaseFinal, heightIncreaseFinal)  to return value to 40px after it reaches 320.
    }
    increaseCircleSizeEl.style.width = widthIncreaseFinal + "px"; //returns the width value back to style sheet
    increaseCircleSizeEl.style.height = heightIncreaseFinal + "px"; // returns the height value back to style sheet
  }

  increaseCircleSizeEl.innerHTML;
})


document.querySelector("#remove button").addEventListener('click',function(node){
  // TASK #5
var userListEl = document.querySelectorAll("li");
   userListEl.className = "inactive"; //declares className to userListEl
    for(var i = 0; i < userListEl.length; i ++){//loops through the orderlist
        var userListElement = userListEl[i];
      if(userListElement.classList.contains('inactive') === true){ //compares each of the list class to inactive to be true.
         userListElement = userListEl[i].parentNode.removeChild(userListElement); //removes each inactive in the list
      }
      document.createTextNode('\u00A0'); // was supposed to create a space between list and footer
      var horizontalLine = document.querySelector('.horizontalLine'); //creates a footer after the inactives are removed
               horizontalLine.style.border = "20px solid Grey";
   }
   userListEl.innerHTML;

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
 var reverseSquaresEl = document.querySelectorAll(".square")

     for (var i = reverseSquaresEl.length - 1; i >= 0; i--) { //creates a reverse for loop to iterate through the list backwards
        reverseSquaresElement = reverseSquaresEl[i];
        reverseSquaresElement = reverseSquaresEl[i].parentNode.appendChild(reverseSquaresElement);  //reverses the squares in te list
      }
         reverseSquaresEl.innerHTML;
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

   var reversedWordsEl = document.querySelectorAll('#tasks li');
      //console.log(reversedWordsEl)
   for(var i = 0; i < reversedWordsEl.length; i++){
      //console.log(reversedWordsEl[i])
       var reverseWordElement = reversedWordsEl[i].innerHTML.split('').reverse().join('');
       //console.log(reverseWordElement)
        reversedWordsEl[i].innerHTML = reverseWordElement;

}

    reversedWordsEl.innerHTML;
})

// I DO NOT GET CREDIT FOR DOING ADVENTURE MODE, IT WAS PRESENTED TO US IN CLASS.
// I DID ATTEMPT PART OF IT, BUT WAS UNABLE TO COMPLETE.
document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8

 var cityImages = document.querySelector('#city-img')
      cityImages.src = './images/city-photo-2'
      //console.log(cityImages, cityImages.src)
   var splitCityImgStr = cityImages.src.split('/')//<<<<---Split full path into an array
      //console.log(splitCityImgStr)
   var newCityImgString = splitCityImgStr.pop() //<<<----access city-photo
      //console.log (newCityImgString)
   var cityImgNumStr = NewCityImgString.split('.')[0]//<<<---- 0 index
      //console.log(NEWCityImgString)
   var IsoNum = cityImgNumStr.split('-').pop()
      //console.log(cityImgNumStr)
   var imgNumStr = cityImgNumArr.pop()
     // //console.log(numString)

    //convert the isolated number string to and integer and add 1
   var imgValue = parseInt(imgNumStr)
   var nextImgNum = imgValue + 1
      if (nextImgNum <= 10){
   var cityImgNum = nextImgNum
      }else {
   var cityImgNum = 1
      }
   //var nextImgNumCapped = imgNum % 10 =1
 //write back to the DOM file
   cityImages.src = './images/city-photo-" + imgImgNumCapped+ ".jpg'







})

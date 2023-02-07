 // problem-1 ---(mindgame)----**
// please... your input parameter should be a namber .Do not  use string .

 function mindGame(number){
  const rasult = number * 3;
  const add = rasult + 10;
  const divide = add / 2;
  const difference = divide - 5;
  console.log(difference) ;
  return rasult;
}
mindGame(5);

// problem-2
// please... must use string.if you use string ,this function will be ran,do not show error.
function evenOdd(name){
    let friendName = name.length;
    let count = name.length % 2;
    if( count != 0){
        console.log("odd");
    }
    else{
        console.log("even")
    }
    return;
}
evenOdd("khans");


//  probolem-3
//please... your input parameter should be a namber .Do not  use string .

function isLGSeven(number){
    const rasult = number - 7;
    if( rasult < 7){
      console.log(rasult);
    }
    else if(rasult > 7 ){
      console.log(rasult * 2);
    }
    return rasult;
  }
  isLGSeven(20)

//   problem-4
//please... Must use in this function whit a Array(input).do not use this rule ,function show you error.

function findinfBadData(data){ 
    let count = 0;

    for( let i = 0; i < data.length; i++){
        const element = data[i];
        if(element <= 0) count++;
      }
      return count;
}
const data = [1,-1,2,4,-5];
const baddata =findinfBadData(data);
// console.log(baddata);


// problem-5

//please...Must use in this function whit a Array(input).do not use this rule ,function show you error.

function gemsToDiamond(numbers){
  const firstQuantity = 21;
  const secondQuanrity =32;
  const thirdQuantity = 43;
  const first = numbers[0] * firstQuantity;
  const second = numbers[1] * secondQuanrity;
  const third = numbers[2]  *  thirdQuantity;
  const rasult = first + second + third;
  // console.log(rasult);

  if(rasult > 1000 *2){
      const sum = rasult - 2000;
      // console.log(rasult -2000);
      return sum ;
  }
}

const numbers = [100,5,1];
const shawon = gemsToDiamond(numbers);
// console.log(shawon);



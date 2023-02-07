// const phones = [
//     {name: "samsunge",camera: 20, stroge:"64gb",price: 50000, color : "silver"},
//     {name: "opp",camera: 20, stroge:"64gb",price: 30000, color : "silver"},
//     {name: "nokia",camera: 20, stroge:"64gb",price: 70000, color : "silver"},
//     {name: "tecno",camera: 20, stroge:"64gb",price: 100000, color : "silver"},
//     {name: "takka",camera: 20, stroge:"64gb",price: 10000, color : "silver"},
//     {name: "pojo",camera: 20, stroge:"64gb",price: 50000, color : "silver"},
//     {name: "iphone",camera: 20, stroge:"64gb",price: 90000, color : "silver"},
//     {name: "walton",camera: 20, stroge:"64gb",price: 90000, color : "silver"},
//     {name: "pnone",camera: 20, stroge:"64gb",price: 340000, color : "silver"},
//     {name: "walton",camera: 20, stroge:"64gb",price: 550000, color : "silver"},
// ];

// function cheapestphone(phones){
//     let cheapest = phones[0];
//     for( let i = 0; i < phones.length;i++)
//     {
//         const phone = phones[i];
//         if(phones.price > cheapest.price){
//             cheapest = phone;
//         }

//     }
//     return cheapest;
// }

// const myphone =cheapestphone(phones);
// console.log(myphone);


// let sum=0; 
// for( let i = 0; i<=3;i++){ 
// sum = sum + i; 
// }
// console.log(sum);

// function tricketprice(tricketQuntity){
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const restRate = 70;
//     if(tricketQuntity <= 100){
//         const price = tricketQuntity * first100Rate;
//         return price;
//     }
//     else if(tricketQuntity <= 200){
//         const first100Price = 100 * first100Rate;
//         const resttrickQuantity = tricketQuntity - 100;
//         const restTrickprice = resttrickQuantity * second100Rate;
//         const totalPrice = first100Price + restTrickprice;
//         return totalPrice;
//     }

// }

// const price = tricketprice(120);
// console.log(price);


// problem-1

// function mindGame(valu){
//     const  sum = valu * 3;
//     let sumadd = sum + 10;
//     let sumdevide = sumadd / 2;
//     let sumdifference = sumdevide - 5;
//     return sumdifference;
    
// }
//  mindGame(3);

//  probolem-3
// function isLGSeven(number){
//   const rasult = number - 7;
//   if( rasult < 7){
//     console.log(rasult);
//   }
//   else if(rasult > 7 ){
//     console.log(rasult * 2);
//   }
//   return rasult;
// }
// isLGSeven(-15)

// function maxInArray(numbers){
//   let largest = numbers[0];
//   for( let i = 0; i < numbers.length; i++){
//     const index = i;
//     const element = numbers[index];
//     if(element > largest){
//       largest = element;
//     }
//   }
//   return largest;
// }


// function findinfBadData(data){ 
//     let count = 0;

//     for( let i = 0; i < data.length; i++){
//         const element = data[i];
//         if(element <= 0) count++;
//       }
//       return count;
// }
// const data = [1,-1,2,4,-5];
// const baddata =findinfBadData(data);
// console.log(baddata);

// function gemsToDimond(number){
//     const firstQuantity = 21;
//     const secondQuanrity = 32;
//     const thirdQuantity = 43;
//     for(let i = 0; i < number.length; i++){
//         const element = number[i];
//         // const gems1 = element * firstQuantity;
//         // const gems2 = element * secondQuanrity;
//         // const gems3 = element * thirdQuantity;
//         // let total = gems1 + gems2 +gems3;
//          if(gems1 + gems2 +gems3 >1000 *2){
//             console.log(toral - 2000);
//          }
//     }
//     return total;
// }
// const number = [100,5,1];
// const rasult = gemsToDimond(number);
// console.log(rasult);

// function evenOdd(name){
//     let friendName = name.length;
//     let count = name.length % 2;
//     if( count != 0){
//         console.log("odd");
//     }
//     else{
//         console.log("even")
//     }
//     return;
// }
// evenOdd("khans");

// function mindGame(numbers){
//     const rasult = numbers * 3;
//     return rasult;
//     function add(rasult){
//         const zog = rasult + 10;
//         return zog;
//         }
//     }
//     function shawan(zog){
//         const divide = zog / 2;
//      return divide;

//      }
    
//     function rana(divide){
//         const difference = divide - 5;
//         return difference;}
//     return difference;


// mindGame(20);

// function mindGame(number){
//     const rasult = number * 3;
//     const add = rasult + 10;
//     const divide = add / 2;
//     const difference = divide - 5;
//     console.log(difference) ;
//     return rasult;
// }
// mindGame(5);

// function gemsToDamond(number){
    // const firstQuantity = 21;
    // const secondQuanrity =32;
    // const thirdQuantity = 43;
//     // const firstOne = number.lenght * firstQuantity;
//     // const secondOne = number .lenght * secondQuanrity;
//     // const thirdOne = number .lenght * thirdQuantity;
//     // console.log(firstOne,secondOne,thirdOne);

//     for( let i = 0; i < number.lenght; i++){
//         const element = number[i];
//         console.log(element);
//     }
//     return element;

// }

// const number =[100,5,1];
// const shawon = gemsToDamond(number);
// console.log(shawon);


// function gemsToDiamond(numbers){
//     const firstQuantity = 21;
//     const secondQuanrity =32;
//     const thirdQuantity = 43;
//     const first = numbers[0] * firstQuantity;
//     const second = numbers[1] * secondQuanrity;
//     const third = numbers[2]  *  thirdQuantity;
//     const rasult = first + second + third;
//     // console.log(rasult);

//     if(rasult > 1000 *2){
//         const sum = rasult - 2000;
//         // console.log(rasult -2000);
//         return sum ;
//     }
// }

// const numbers = [20,200,50];
// const shawon = gemsToDiamond(numbers);
// console.log(shawon);


// function mindGame(number){
//     const rasult = number * 3;
//     const add = rasult + 10;
//     const divide = add / 2;
//     const difference = divide - 5;
//     console.log(difference) ;
//     return rasult;
//   }
//   mindGame(5);

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

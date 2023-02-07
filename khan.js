// var mycomputer = {
//     brand : "sky",
//     price : 52000,
//     wranty : "3years"
// }
// console.log(mycomputer.brand);



// function mycomputer(num1,num2){
//     var total = num1 + num2;
//     console.log(total);
// }
// mycomputer(20,30);

// function print(a, b, c){
//     return a+2;
//     return a*b;
//     return b*c+a;
//   }
//   console.log(print(1,2,3));


// function lipeyear(year){
//   const remainder = year % 4;
//   if(remainder === 0){
//     console.log(" this year is lipyear", year);
//   }
//   else{
//     console.log("this year is not lipyear",year);
//   }
//   return year;
// }
// lipeyear(2022);

// function isNumber(number){
//   const remainder = number % 2;
//   if(remainder === 0){
//     console.log("this number is even",number);
//   }
//   else{
//     console.log("this number is odd",number);
//   }
//   return number;
// } 


 
// function isliper(year){
//   const remainder = year % 4;
//   if(remainder === 0){
//     console.log("this is even:",year);
//   }
//   else{
//     console.log("this is odd number", year);
//   }
//   return year;
// }
// isliper(2022);

// function findLeapYear(year){
//     const remainder = year % 4;
//       if( remainder === 0){
//         console.log("this is leap-year",year);
//       }
//       else{
//         console.log("this year is not leap-year",year);
//       }
//       return year;
//     }
//     findLeapYear(2023,2024,2025,2028,2030);
    

// function findLeapYear(year){
//     var years =[2023,2024,2025,2028,2030]
//     for( var i = 0; i < 7; i++){
//       var year = years[i];
      
//       const remainder = i % 2, i++;
//     if(remainder === 0){
//       console.log("this number is even",number);
//     }
//     else{
//       console.log("this number is odd",number);
//     }
//       return year;
      
//   }
// //     findLeapYear();

// function findLeapYear(year){
//     for( var i = 0; i < 7; i++){
//       var year = years[i];
      
    //   const remainder = i % 4, i++;
    // if(remainder === 0){
    //   console.log("this number is even",number);
    // }
    // else{
    //   console.log("this number is odd",number);
    // }
//       return year;
      
//   }
//     const years = [2023,2024,2025,2028,2030];
//     findLeapYear(years);
// function findLeapYear(year){
//   let year = 0 ;
//   for( let i = 1; i < 5; i++){
//     console.log(year);
//   }
//   }
// const year = [2022,2022,2044,2054,2085];
//   findLeapYear(year);

// function findLeapYear(years){
//   let i = years.lenght;
//   for( let i = 0 ; i < years.lenght; i++){
//     const index = i;
//     const element = years[index];
    
//       const remainder = i % 4,;
//     if(remainder === 0){
//       console.log("this number is even",number);
//     }
//     else{
//       console.log("this number is odd",number);
//     }
    
//   }
//   return years;
// }
// const years = [2022,2022,2044,2054,2085];
// findLeapYear(years);
    

// function findLeapYear(years){
//   let i = 0;
//   for( let i = 0 ; i < years.lenght; i++){
//     const index = i;
//     const element = years[index];
//     console.log(index);
    
//       const remainder = index % 4;
//     if(remainder === 0){
//       console.log("this number is leap-year",years);
//     }
//     else{
//       console.log("this number is not leap-year",years);
//     }
    
//   }
// }
// const years = [2022,2022,2044,2054,2085];
// findLeapYear(years);


// function helloUniverse(){
//   console.log("Hello Universe !! Welcome me to Js World!!!");
//   return;
//   }
//   helloUniverse();



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

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log("tallest person is:",tallest);

// function feetTolnch(inches){
//   const feet = inches / 12; 
//   const inch = feet * 12;
  
//   return inch,feet;

// }

// const shawon = feetTolnch(7);
// console.log(shawon);


// function centimeterToMeter(centimeter){
//   const centimeterValue = 0.01;
//   const meter = centimeter * centimeterValue;
//   return meter;
// }
// const value = 144;
// const values = centimeterToMeter(value);
// console.log(values);

// function paperRequirements(Pages){
//   let sum = 0;
//   for(let i = 0; i < pages.length; i++){
//     const index = i; 
//     const element = pages[index];
//     sum = sum + element;
//   }
//   return sum;

// }

// const pages = [455,500,300];
// const shawon = paperRequirements(pages);
// console.log(shawon);

// function paperRequiredments(pages){
//   let sum = 0;
//   for(let i = 0;i < pages.length; i++){
//     const index =i;
//     const element = pages[index];
//     sum = sum + element;
//   }
//   return sum;

// }
// const pages = [300,400,500,700];
// const shawonBookPage = paperRequiredments(pages);
// console.log(shawonBookPage);
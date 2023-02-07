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
//     for( let i = 0 ;i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.price < cheapest.price){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// const myphone = cheapestphone(phones);
// console.log(myphone);

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

// function cheapestphones(phones){
//     let cheapest = phones[0];
//     for( let i = 0; i < phones.length; i++){
//         const phone  =phones[i];
//         if(phone.price < cheapest.price){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }

// const myphone = cheapestphones(phones);
// console.log(myphone);

function isOddnumber(numbers){
    const remainder = numbers % 2;
    if(remainder === 0){
        console.log("number is even")

    }
    else{
        console.log("number is odd ")
    }
    return remainder;
}
isOddnumber(88);
// //variables
// let julz = "julz julz julz";



// const julz2 = "10"




// //objects
// let julz3 = {name: "julz", age: 10};

// let person1 = julz3.name;
// let herAge = julz3.age;


// let fullManeno = person1  + " " + herAge;





// //concatenation


//  let age = 10;
// // if(age > 18){
// //     console.log("you can drive");

// // }
// // else {
// //     console.log("you can't drive");
// // }
// let julz4 =  age > 18 ? "you can drive" : "you can't drive";

// //switches 
// let julz5 = true; ///declear variable
// switch(typeof julz5){
//     case "number":
//         console.log("THIS IS A NUMBER")
//         break;
    
//     case "boolean":
//     console.log("WEWE WACHA BANA")
//     break; 
//     case "string":
//         console.log("BBL DRIZZY")  
// };
// //ARRAYS
// // let fruits = ['apple','orange','bananas','kiwis'];
// let numberFruits = fruits.length;
// console.log(numberFruits);

// //objects
// const person = {
//     firstName: "spongebob",
//     lastName: "squarepants",  //properties of an object
//     Age:30,
//     isEmployed:true,

//     sayHello: function () {
//         console.log('Hiiiiiiii squidward')   //function of an object 
//     }


//   };
//   person.sayHello();


  //LOOPS 
  //FOR LOOP initialization  + condition   + increment ++ -
//  for(let i = 0; i<=10 ; ++i ){
//     console.log(i)

//  }
// console.log("happy new year");

//  for(let i =10; i>0; --i ){
//     if (i === 7){
//         continue;
//     }
//     else{
//         console.log(i)
//     }

//  }
// console.log("HAPPY NEW YEAR")

//continue used to skip a certain number in aloop
// for(i = 1;i<=20; i++){
//     if (i ===13){
//         break;
//     }
//     else{
//         console.log(i)
//     }
// }
// console.log("happy mothers day")

//while loop=repeat a certain  code untill 
// let userName = " ";
// while(userName=== " "){
//     userName = window.prompt("Hello julz you havent enterd a name my guy")
// }
// console.log(`Welcome aboard ${userName}`)

//DIFICUL QUESTION
let isLogged = false;    //declearation
let userName;
let password;
while(!isLogged){
    userName = window.prompt(`Enter  your name type shii type shii`)
    password = window.prompt(`YOO!! TELL ME THE PASSWORD I WONT TELL🤫`)

  if (userName ==="julz" && password === "Julz123"){
    isLogged = true
    console.log("You are a tech person niceeee")
  }
  else{
    console.log("WEWE SI WETUUUUU")
}
}
//functions
// function julz() {
//     console.log("HIIIII")
// }
// julz()

function julz(firstName,lastName){
    console.log("HIII" + firstName +""+lastName)
}
julz("BOB","MARLEY")




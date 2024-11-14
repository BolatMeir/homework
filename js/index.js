// for(let i=25; i>=20; i--){
//     console.log(i);
// }


// for(let i = 1; i<=100; i++){
//     if(i % 2 ==0){
//         console.log(i + "- even")
//     }else{
//         console.log(i + "- odd")
//     }
// }



// let san = +prompt("Tak san engiz")
// for(let i = 1; i<=san; i++){
//     console.log(i++)
// }



// let san1 = +prompt("San 1 engiz")
// let san2 = +prompt("San 2 engiz")
// for(let i = san1; i <=san2; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }




// let san = +prompt("San engiz")
// for(let i=1; i<=10; i++){
//     if(i == 4){
//         break;
//         console.log(i + "toktaityn san")
//     }
//     console.log(i)
// }




// let san = +prompt("San engiz")
// for(let i=1; i<=10; i++){
//     if(i == 4){
//         continue;
//     }
//     console.log(i)
// }




// let san = +prompt("San engiz")
// for(let i=10; i>=1; i--){
//     if(i == 5){
//         continue;
//     }else if(i == 9){
//         continue;
//     }
//     console.log(i)
// }


// let san = +prompt("San engiz")
// for(let i=10; i<=40; i++){
//     if(i>=20 && i<=30 && i % 2 == 0){
//         continue;
//     }
//     console.log(i)
// }





// let san = +prompt("San engiz")
// let sum = 0;
// for(let i =1; i<=san,i++){
//     sum= sum + i;
// }
// alert(san + "qosyndy" + sum)




// let num = 1;

// while(num<=10){
//     if(num%2==0){
//         console.log(num + "-Jup san")
//     }else{
//         console.log(num + "-Tak san")
//     }
//     num++;
// }


// let san = +prompt("Kez kalgen san engiz");
// let san1 = 0;
// while(san1<=san){
//     if(san1 % 2 == 1){
//         console.log(`${san1}  "-tak san`)
//     }
//     san1++;
// }





// let san = +prompt("San engiz")
// let sum = 0;
// let i = 1;
// while(i <= san){
//     sum= sum + i;
//     i++;
// }

// alert(san + "qosyndy" + sum)






// let san = +prompt("San engiz")
// let sum = 0;
// let i = 1;
// while(i <= san){
//     sum= sum + i;
//     i++;
// }

// alert(san + "qosyndy" + sum)





// let san = +prompt("San engiz")
// let i = 1;''
// while(i<=10){
//     if(san > 0 && san <=30){
//         console.log(`${san}*${i} = ${san * i}`);
//     }else{
//         alert("San duris san engizsei!!!!!!!!")
//         break;
//     }
//     i++;
// }



let  studentSany = +prompt("Student sanin engiz")
let i = 1
let result = 0;
while (i <= studentSany){
    let baga = +prompt(i + "student bagasi")
    result += baga
    i++
}
alert("Ortaq baga:" + (result/studentSany))
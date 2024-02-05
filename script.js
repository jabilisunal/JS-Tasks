//  ? Array
// let,const\
// console.log(typeof reqem);
// const numbers = [
//   12,
//   35,
//   40,
//   50,
//   "Heyva",
//   true,
//   false,
//   -10,
//   30,
//   "A",
//   [12, 43, 54],
//   { name: "Sunal", surname: "Jabili" },
// ];
// 1   2 3  4  5  6
// const reqem = 10;
// console.log(reqem)

// 0 ,1, 2 , 3, 4,  5
// console.log(arr)
// console.log(arr.length-1)
// length
// indeksleme.

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {

//   }
// }

// const arr = [10, 15, 20, 25, 30, 35, "Sunal","Nermin",12,32];
// ? indexler-i tek olan elementleri tapaq.

// ?  cut indexde duran elementlerin sayini tapin.
// ? cut indexde duran  ve 5e bolunen elementlerin sayini tapin.
// ?  cut indexde duran elementlerin ozun tapin.

// let count =0;
// for (let i = 0; i < arr.length; i++) {
//     if(i%2 ==0 && arr[i]%5==0){
//         count++;
//         console.log(arr[i])
//     }
// }
// console.log(count);

//

//? Verilmiş Arraydə tək ədədlərin ədədi ortasını,tapın.

// const numberArr = [12, 42, 23, 33, 5, 9, 12];
// let sumOddNumber=0;
// let count=0;
// let edediOrtaTek=0;

// for (let i = 0; i < numberArr.length; i++) {
//   if (numberArr[i] % 2 != 0) {
//     count++;
//     sumOddNumber +=numberArr[i];
//     edediOrtaTek= sumOddNumber/count
//   }
// }
// console.log(edediOrtaTek)

// const numberArr = [12, 42, 23, 33, 5, 9, 12];
// ! Verilmiş Arraydə tək elementlerden ən böyüyünü tapan alqoritm yazin.

// let numbersArr = [12,32,101,44,55,65,12,105];
// let maxEded=0;

// for (let i = 0; i < numbersArr.length; i++) {
//     if(numbersArr[i]%2==1){
//         if(maxEded<numbersArr[i]){
//           maxEded =numbersArr[i]
//         }
//     }
// }
// console.log(maxEded)

// ! Verilmiş Arraydə cut elementlerden ən kiciyin tapan alqoritm yazin.

// let minEded=Infinity;

// for (let i = 0; i < numbersArr.length; i++) {
//     if(numbersArr[i]%2==0){
//         if(minEded>numbersArr[i]){
//            minEded=numbersArr[i]
//         }
//     }
// }
// console.log(minEded)

// Verilmiş Arraydə elementlerin ən böyüyk ədədlə ən kiçik ədədin fərqini tapan alqoritm yazin.

// let numbersArr = [12,32,101,44,55,65,6,105];
// let minEded=Infinity;
// let maxEded=0;

// for (let i = 0; i < numbersArr.length; i++) {
//   if(maxEded<numbersArr[i]){
//    maxEded=numbersArr[i];
//   }
//   if(minEded>numbersArr[i]){
//     minEded=numbersArr[i]
//   }
// }
// console.log(maxEded - minEded);

let name = "salam";
//? verilmish adda n ve m herfi varsa ok yazdir eks halde don't ok yazdir

// for (let i = 0; i < name.length; i++) {
//     if (name[i].toLowerCase() =="m") {
//         console.log("okey")
//     }if(name[i].toLowerCase() =="n"){
//         console.log("okey")
//     }
//     else{
//         console.log("don't okey")
//     }
// }

// let firstName ="Sunal";
// console.log(firstName.toLowerCase())
// console.log(firstName.toUpperCase())


const students=[
    {
        id:1,
        name:"Samir",
        surname:"Orucov",
        age:18,
        salary:2000,
        isStudent:true,
        university:{
            name:"ASOIU",
            faculty:"IT"
        }
    },
    {
        id:2,
        name:"Kamil",
        surname:"Ferecov",
        age:28,
        isStudent:true,
        salary:2500,
        university:{
            name:"Azmiu",
            faculty:"Programming"
        }
    }
]

for (let i = 0; i < students.length; i++) {
  if(students[i].salary>=1500){
console.log(students[i].name)  
}
  
}
    

// console.log(students[0].university.faculty)
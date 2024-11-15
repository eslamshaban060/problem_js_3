// !!!!!!!!!!!!!!!!!!!!!!!!!!! PROBLEM 3 !!!!!!!!!!!!!!!!!!!!!!!!!

// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript


// ====================== METHODE 1 =============================

// function twoSum(numbers, target){
  
//     // =========================== condition =================
//     for(let i = 0 ; i < numbers.length ; i++){
        
//         for(let j = i + 1 ; j < numbers.length ; j++){
//             if(numbers[i] + numbers[j] == target){
//                 return [i , j]
//             }
//         }
//     }


//     [1, 2, 3]
//     [1, 2, 3]
//     // =========================== condition =================
  
// }



//  ====================== METHODE 2 =======================
// function twoSum(numbers, target){

//     let i = 0
//     // ====================== CONDITON ==================
//     while(i < numbers.length ){
//         j = i+1
//         while(j < numbers.length ){
//             if(numbers[i] + numbers[j] == target){
//                 return [i , j]
//             }

//             j++
//         }


//         i++
//     }


//     // ====================== CONDITON ==================
// }

// console.log(twoSum([1, 2, 3], 4))














//  ==================== forEach &&& map =====================
// let array = [1 ,2,3,4,5]

// array.map(function(s){

// console.log(s)

// })
// =====================================

// let array = [1 ,2,3,4,5]
// y = array.map(function(iteam){
//     return iteam*2


// })
// console.log(y)


// let array = [1 ,2,3,4,5]
// y = array.forEach(function(iteam){
//     return iteam*2


// })
// console.log(y)
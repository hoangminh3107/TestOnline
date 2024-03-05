// function countVietnameseLetters(inputString) {
//     const vietnameseLettersRegex = /aw|aa|dd|ee|oo|ow|uw|w/g;

//     const matches = inputString.match(vietnameseLettersRegex);

//     const count = matches ? matches.length : 0;

//     return count;
// }

// const input = "hfdawhwhcoomdduw";// Users can import
// const output = countVietnameseLetters(input);
// console.log(`Output: ${output}`); 

// const array = [9, 3, 2, 5, 4 , 0];
// let max = array[0]
// for (var i =0 ; i< array.length; i++){
//     if(max < array[i]){
//         max = array[i]
//     }
// }
// console.log( [...max]);




const array = [9, 3, 2, 5, 4, 0];


// let min = array[0]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//         min = array[i]
//     }
// }

// const arrS = array.map((val, index, arr) => {
//     arr.map((value, index) => {
//         if (value < value[index + 1]){
//             let tem = arr[index]
//             arr[index]= arr[index+1]
//             arr[index +1]= tem
//             return tem
//         }
//     })
// })

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
        if (array[j] < array[j + 1]){
            let temp = array[j]
            array[j]= array[j+1]
            array[j+1] = temp
        }
    }
}

console.log(array);
// // Sử dụng Bubble Sort để sắp xếp mảng
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         // So sánh phần tử hiện tại với phần tử kế tiếp
//         console.log(array[j]);
//         if(array[j] > array[j+1]){
//             let temp = array[j]
//             array[j]= array[j+1]
//             array[j+1]= temp
//         }
//     }
// }
// console.log(array);

// const max = Math.max(...array);
// console.log(max); // 5

// let fruits = ['orange', 'apple', 'banana', 'pinnaple', 'mangga'];

// // fruits.map(buah=>{
// //     console.log(buah);
// // });

// const juices = fruits.map(buah =>{
//     return buah + ' -Jus';
// })

// console.log(juices);
// function removespaces(text){
//     let result = '';
//     for (let i=0 ; i< text.length; i++)
//         if (text[i] !==' '){
//             result += text[i];
//         }
//         return result;

//     }

    function removespaces(text){
        for (let i=0 ; i< text.length; i++)
            if (text[i] !==' '){
                if (text[i] = 'a'){
                    console.log(text[i])               }
            }
        
        }
    

const password = 'aku anak indonesia';
const spaceremoved = removespaces(password);

console.log(spaceremoved);
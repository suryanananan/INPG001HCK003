//let temp ='';

//for(let i=0; i<5; i++){
    
    //for (let j=0; j<1; j++){
      //  temp += '*';
    //}

  //  console.log(temp);
//}


// for(let i=0; i<5; i++){
//     let temp ='';
    
//     for (let j = 5; j > i; j --){
//         temp += '*';
//     }

//     console.log(temp);
// }


let students = [
    {
        nama : 'nana',
        nilai : [10 , 20 , 30],
    },

    {
        nama : 'evin',
        nilai : [20, 30, 40],
    },
];

for (i=0 ; i<students.length;i++){
    //console.log(students[i]);
    student = students[i];
    nilai = student.nilai[i];
    console.log(nilai);
}

let nana = {
    depan: 'Nana',
    belakang: 'Suryana',
    hoby:['main game','tidur','jalan jalan','kuliner'],
    afav: 7,
    kacamata: true,
    tinggi:170,
}

let lengkap = nana.depan + ' ' + nana.belakang;

//console.log(lengkap);

nana.afav=8;
//console.log(nana.afav);

nana.hoby.unshift('coding');
//console.log(nana.hoby);

nana.lulusan = "Hacktiv8";
//console.log(nana);

// hoby = nana.hoby.map(hobi=>{
//     console.log(hobi);
// })

// console.log(nana.hoby);

// // for(i=0; i<nana.hoby.length;i++){
// //     console.log(nana.hoby[i]);
// }

for (let key in nana){
    console.log(key);
}


Object.keys(nana).forEach(function(key){

    console.log(key,nana[key]);
})
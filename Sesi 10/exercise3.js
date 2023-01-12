// let tanggal = new Date();

// console.log(tanggal);

// var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

// var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];

// var date = new Date();

// var day = date.getDate();

// var month = date.getMonth();

// var thisDay = date.getDay(),

//     thisDay = myDays[thisDay];

// var yy = date.getYear();

// var year = (yy < 1000) ? yy + 1900 : yy;

// console.log(thisDay + ', ' + day + ' ' + months[month] + ' ' + year);

function cetaktgl(){
    console.log(new Date);
}

cetaktgl();

const hariini = () =>{
    return new Date();
}

const sekarang = hariini();
console.log(sekarang);
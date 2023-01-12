// let i = 0;

// for (let i = 0; i<=100; i+=2)
// {
//     console.log('ini dia', i);
// }

let isEdit = false;

const button = document.getElementById('edit');
const hasil = document.getElementsByTagName('div');

button.addEventListener('click', () => {
console.log('jalan', isEdit);
if (isEdit === true) {
    isEdit = false;
    document
        .getElementById('form')
        .setAttribute('class','hidden');
}
    else{
        isEdit = true;
        document
        .getElementById('form')
        .setAttribute('class','displayed')
    }
})
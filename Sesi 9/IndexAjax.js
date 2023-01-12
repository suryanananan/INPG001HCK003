function loadDoc() {
//     const ajax = new XMLHttpRequest();
//     ajax.onload = function() {
//         const payload = JSON.parse(this.response, 'utf-8').data.products;
//         displaydata(payload)
//     };

//     ajax.open(
//         'GET',
//         'https://www.blibli.com/backend/search/products?searchTerm=android',
//         true
//     );
//     ajax.send();
//   

 fetch(
    'https://pokeapi.co/api/v2/pokemon/ditto',
    )
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    // const panggil = data;
        // displaydata(panggil);
 });

}
//   function displaydata(data){
//     const tableBody = document.getElementById('table-body');

//     data.forEach((product) => {
//         const tr = document.createElement('tr');
//         const tdnama = document.createElement('td');   
//         const tdharga = document.createElement('td');
        
//         tdnama.innerText = product.name;
//         tdharga.innerText = product.price.priceDisplay;

//         tr.appendChild(tdnama);
//         tr.appendChild(tdharga);
//         tableBody.appendChild(tr);
//     });
//   }
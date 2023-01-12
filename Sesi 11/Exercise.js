fetch(
    'https://pokeapi.co/api/v2/pokemon',
)
    .then((res) => res.json())
    .then((data) => {

    array = data

    console.log(array.results);

    are = array.results
        
    for ( i = 0 ; i < are.length ; i++){

        const kartu = document.getElementById('card');
        const node = document.createElement('p');
        node.innerText  = are[i].name
        kartu.appendChild(node)        
        
        console.log(node);
    }
    
});


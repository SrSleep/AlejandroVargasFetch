let urlBase = 'https://api-colombia.com';
let invasores = urlBase + '/api/v1/InvasiveSpecie';
let ubciacionTable = document.querySelector('tbody')
console.log(ubciacionTable);

fetch(invasores)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let fila = document.createElement('tr');
        fila.innerHTML =`
                    <td>${data[0].name}</td>
                    <td>${data[0].scientificName}</td>
                    <td>${data[0].scientificName}</td>
                    <td>${data[0].scientificName}</td>
                    <td>${data[0].scientificName}</td>
                    <td>${data[0].scientificName}</td>
                    `

    })
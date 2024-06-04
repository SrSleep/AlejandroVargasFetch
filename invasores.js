let urlBase = 'https://api-colombia.com';
let invasores = urlBase + '/api/v1/InvasiveSpecie';
let ubciacionTable = document.querySelector('tbody')
console.log(ubciacionTable);



fetch(invasores)
    .then(response => response.json())
    .then(data => {
        
        data.forEach(element => {
            let fila = document.createElement('tr');
            if (element.riskLevel === 2) {
                fila.classList.add('table-success')
            } else if (element.riskLevel === 1) {
                fila.classList.add('table-primary')
            }
            fila.innerHTML = `
                    <td class="firstMayus">${capitalize(element.name)}</td>
                    <td class="firstMayus">${capitalize(element.scientificName)}</td>
                    <td class="firstMayus">${capitalize(element.impact)}</td>
                    <td class="firstMayus">${capitalize(element.manage)}</td>
                    <td class="firstMayus">${element.riskLevel}</td>
                    <td scope="col"><img class="img-thumbnail" src="${element.urlImage}" alt="Imagen de referencia del esp"></td>
                    `
            ubciacionTable.appendChild(fila)
        });

    })

    //usar la pirmera letra del parrafo como mayuscula
    function capitalize(text) {
        const firstLetter = text.charAt(0);
        const rest = text.slice(1);
        return firstLetter.toUpperCase() + rest;
      }
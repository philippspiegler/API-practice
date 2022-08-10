function fetchData(){
    fetch('https://api.artic.edu/api/v1/artworks/')
        .then((response) => response.json())
        .then((result) => {
            const data = result.data
            console.log(data)
            createTable(data)
        })
        .catch((error) => {console.log(error)})

    }
    fetchData()

    // api table displaying artwork data

const div = document.getElementById('div')
const table = document.getElementById('table')
const tbody = document.getElementById('tbody')
const tr = document.getElementById('tr')

function createTable(){

    for (let i = 0; i < apiData.data.length; i++){
        
    const tr1 = document.createElement('tr')
    const td1 = document.createElement('td')
    td1.style = ('border: 1px solid black')
    td1.innerHTML = apiData.data[i].artist_title
    
    const tr2 = document.createElement('tr')
    const td2 = document.createElement('td')
    td2.style = ('border: 1px solid black')
    td2.innerHTML = apiData.data[i].title
    
    const tr3 = document.createElement('tr')
    const td3 = document.createElement('td')
    td3.style = ('border: 1px solid black')
    td3.innerHTML = apiData.data[i].date_end
    
    const tr4 = document.createElement('tr')
    const td4 = document.createElement('td')
    td4.style = ('border: 1px solid black')
    td4.innerHTML = apiData.data[i].artwork_type_title

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    tr1.appendChild(td4)
    tbody.appendChild(tr1)
    tbody.appendChild(tr1)
    tbody.appendChild(tr1)
    tbody.appendChild(tr1)

    table.appendChild(tbody)
    div.appendChild(table)

    }   

}


// button below logo to show or hide text

// function toggleButton(){
    
//     const paragraph = document.getElementById('paragraph')
//     const button = document.getElementById('button')
        
//     if  (paragraph.style.display === 'block'){
//             paragraph.style.display = 'none'
//     } else {   
//         paragraph.style.display = 'block'
            
//     }
// }
const url = "https://universities.hipolabs.com/search?country=Pakistan"

async function fetchuniversities(){
    try{
    let response = await fetch(url)
    let data = await response.json()
    return data
    }catch(err){
        console.error(err)
    }
}
function createcard(university){
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${university.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="${university.web_pages[0]}" class="btn btn-primary">${university.domains[0]}</a>
            </div>
        </div>
    `
}
function showUniversitiescard(universities){
    let cardcontainer = document.getElementById('container-card')
    let fragments = document.createDocumentFragment()
    // universities.slice(0,100).forEach((university)
    universities.forEach((university)=>{
        let tempdiv = document.createElement('div')
        tempdiv.innerHTML = createcard(university)
        fragments.appendChild(tempdiv)
    })
    cardcontainer.append(fragments)
}
async function load(){
    let data = await fetchuniversities()
    if(data){
        showUniversitiescard(data)
    }
}
// document.addEventListener("DOMContentLoaded", load);
let button = document.getElementById('btn')
button.addEventListener('click',load)
button.addEventListener('click',()=>{console.log('Clicked')})

// Question 2: Note Saving App:
let savebtn = document.getElementById('btn-note')
let note = document.getElementById('note').value
function savingNote(){
    let note = document.getElementById('note').value
    localStorage.setItem(`Untitled ${Math.floor(Math.random()*1000)}`,note)
    console.log('Note Saved At LocalStorage!')
}
function reload(){
    location.reload
}
savebtn.addEventListener('click',savingNote)
savebtn.addEventListener('click',reload)



// Searching University...
async function search(){
    try{
        console.log('search function running')
        let response = await fetch(url)
        let data = await response.json()
        let inpuniversity = document.getElementById('uni').value.toLowerCase()
        data.forEach((university)=>{
            let nameofuni = university.name.toLowerCase()
            console.log(inpuniversity)
            if(nameofuni === inpuniversity){
                let div001 = document.createElement('div')
                div001.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${university.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="${university.web_pages[0]}" class="btn btn-primary">${university.domains[0]}</a>
                    </div>
                </div>
                `
                document.getElementById('Universitydiv').appendChild(div001)
            }
        })
    }catch(err){
        console.error(err)
    }
}
let btnsearch = document.getElementById('search')
btnsearch.addEventListener('click',search)

//
let del = document.getElementById('btn-delete')
del.addEventListener('click',()=>{
    document.getElementById('container-card').innerHTML = ' '
})


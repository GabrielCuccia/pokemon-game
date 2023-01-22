const CARDS = 10;
let pokemon = document.querySelector("#pokemon")
let draggableElements = document.querySelector("#draggable-elements")
let droppableElements = document.querySelector("#droppable-elements")
let pokemones = []
let pokemonNames = []
let points = 0
async function seachPokemonById(idRandom){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idRandom}/`)
    const data = await res.json() 

    
        pokemones.push(data)
        pokemonNames.push(data)
        draggableElements.innerHTML = ` `
        droppableElements.innerHTML = ` `

        
        pokemones.sort(()=> Math.random()-0.5)
        pokemonNames.sort(()=> Math.random()-0.5)



        pokemonNames.forEach(nombre =>{
            
            droppableElements.innerHTML += `
            <div  class="names">
                <p class="">${nombre.name}</p>
            </div>
            `
        })

        pokemones.forEach(pokemon =>{
            
            
            draggableElements.innerHTML += `<div draggable="true" id="pokemon" class="pokemon">
            <img id="${pokemon.name}" class="pokemon__image" src="${pokemon.sprites.front_default}" alt="">
            </div>`

            
        })
        
        pokemons = document.querySelectorAll(".pokemon__image")
        names = document.querySelectorAll(".names")
        names = [...names]


        pokemons = [...pokemons]
        
        pokemons.forEach(element =>{
            element.addEventListener("dragstart", event =>{
                event.dataTransfer.setData("text", event.target.id)
            })
        })
        
        names.forEach(element =>{
            element.addEventListener("dragover", event=>{
                event.preventDefault()
            })
            element.addEventListener("drop", event=>{
                const dropElementData = event.dataTransfer.getData("text")
                const pokemonId = document.querySelector(`#${dropElementData}`)
                let error = document.querySelector(".ups")
                if(event.target.innerText == dropElementData){
                    event.target.innerHTML = " "
                    event.target.appendChild(pokemonId)
                    error.innerText = " "
                    points++
                    if (points == CARDS){
                        draggableElements.innerHTML = `<p class="win">Ganaste!</p>`
                    }
                }
                else{
                    error.innerText = "Ups"
                }
            })
        })
        



    
}

for (let i = 1 ; i <= CARDS; i++){


    let id = Math.floor(Math.random()*800)+1
    
    seachPokemonById(id)

   
    
    

}
    



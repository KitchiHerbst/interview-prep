// import people from './people.js'

const people = [
    {name: 'Triston', age: 24},
    {name: 'Gloria', age: 23},
    {name: 'Kent', age: 1}
]

document.addEventListener('DOMContentLoaded', () => {
    sayHello()
    addButton()
})

const sayHello = () => {
    let div = document.createElement('div')

    div.innerHTML = '<h1> Bingo </h1>'

    document.body.appendChild(div)
}

const addButton = () => {
    let kent = people[2].name
    let button = document.createElement('button')

    button.innerText = 'Press Me'

    let bingo = document.createElement('div')

    button.addEventListener('click', () => {
        console.log('clicked')
        bingo.innerHTML = `<li>${kent}</li>`
        
    })

    document.body.append(button, bingo)
}
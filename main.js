// Make a div
const shell = document.createElement('div')

// add a class of wrapper to it
shell.classList.add('classShell')

// put it into the body
document.body.prepend(shell)

// make an unordered list
const list = document.createElement('ul')

// add three list items with the words "one, two, three" in them
const liOne = document.createElement('li')
const textOne = document.createTextNode('One')
liOne.append(textOne)
list.append(liOne)

const liTwo = document.createElement('li')
const textTwo = document.createTextNode('Two')
liTwo.append(textTwo)
list.append(liTwo)

const liTree = document.createElement('li')
const textTree = document.createTextNode('Tree')
liTree.append(textTree)
list.append(liTree)

// put that list into the above wrapper
shell.append(list)

// create an image
const image = document.createElement('img')

// set the source to an image
image.src = "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/3/22/0/shutterstock_national-puppy-day-301891139.jpg.rend.hgtvcom.966.725.suffix/1521744692471.jpeg"

// set the width to 250
image.style.width = '250px'

// add a class of cute
image.classList.add('cute')

// add an alt of Cute Puppy
image.alt = "Cute Puppy"

// Append that image to the wrapper
shell.append(image)

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const text = shell.nextElementSibling
shell.prepend(text)

// add a class to the second paragraph called warning
// remove the first paragraph
const paragraphTwo = text.lastElementChild
paragraphTwo.classList.add('warning')
const paragraphOne = text.firstElementChild
paragraphOne.remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

const user = document.createElement('div')

function generatePlayerCard (name, age, height) {
    const poppy = document.createElement('div')
    poppy.classList.add('playerCard')
    poppy.innerHTML= `
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
    `
    const button = document.createElement('button')
    button.innerHTML = `<i class="fa-solid fa-trash-arrow-up"></i>`
    // button.addEventListener('click', returnCard)
    poppy.append(button)
    return poppy
} 

// make a new div with a class of cards
const cards = document.createElement('div')
cards.classList.add('cards')

// make 4 player cards using generatePlayerCard
const maylo = generatePlayerCard('Maylo', 1, 40)
const patron = generatePlayerCard('Patron', 2, 50)
const rex = generatePlayerCard('Rex', 3, 80)
const bolto = generatePlayerCard('Bolto', 4, 70)

// append those cards to the div
cards.append(maylo)
cards.append(patron)
cards.append(rex)
cards.append(bolto)

// put the div into the DOM just before the wrapper element
document.body.prepend(cards)
                    
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
                  
// select all the buttons!
const arrBtn = document.querySelectorAll('button')

// make out delete function
// loop over them and attach a listener
function returnCard (i) {
    i.addEventListener('click', ()=> (i.parentElement).remove())
} 
arrBtn.forEach(returnCard)       
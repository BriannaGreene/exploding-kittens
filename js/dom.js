console.log('dom.js is connected')

function createAboutList(){
  // document.addEventListener('DOMContentLoaded', function(){
  // find dom element
  let ul = document.querySelector('.about ul')
  console.log("ul is ", ul)
  // loop over the lines of text that will become li
  let aboutText = [
    'A CARD GAME FOR PEOPLE WHO ARE INTO',
    'KITTENS AND EXPLOSIONS AND LASER BEAMS',
    'AND SOMETIMES GOATS'
  ]
  for (var i = 0; i < aboutText.length; i++) {
    console.log("adding", aboutText[i])
    // create a new element
    let li = document.createElement('li')
    li.innerHTML = aboutText[i]
    // stick it in the dom
    ul.appendChild(li)
  }
}


function createExploreCard(){
  let placement = document.querySelector('#cards-container')
  console.log('what is placement now? ', placement)
  console.log('creating exploding card')
  let card = document.createElement('div')
  card.className = 'card'

  let h3 = document.createElement('h3')
  h3.innerHTML = 'Explode'

  card.appendChild(h3)

  let img = document.createElement('img')
  img.setAttribute('src', 'images/defuse.png')

  card.appendChild(img)
  placement.prepend(card)
}


document.addEventListener('DOMContentLoaded', function() {
  createAboutList()
  createExploreCard()
})

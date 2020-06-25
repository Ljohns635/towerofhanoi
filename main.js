const rod1 = document.querySelector('#rod1')
const rod2 = document.querySelector('#rod2')
const rod3 = document.querySelector('#rod3')

let disc1 = document.querySelector('#disc1')
let disc2 = document.querySelector('#disc2')
let disc3 = document.querySelector('#disc3')
let disc4 = document.querySelector('#disc4')

let destinationStart = "pick item up"
let destinationEnd = null

const moveIt = function (evt) {
  let choices;
  console.log('target: ' + evt.target.id)
  console.log('currentTarget: ' + evt.currentTarget.id)
  const rod = evt.currentTarget
  const stone = rod.lastElementChild
  if (destinationStart === 'pick item up') {
    //pick
    if (stone) {
      console.log('You picked up a stone: ' + stone.id)
      destinationEnd = stone
      destinationStart = 'dropped it'
    } else {
      console.log('No disc to pick up')
    }
  } else {
      console.log('You dropped item onto ' + rod.id)
      rod.append(destinationEnd)
      destinationStart = 'pick item up'
    } 
}

rod1.addEventListener('click', moveIt)
rod2.addEventListener('click', moveIt)
rod3.addEventListener('click', moveIt)
//Recieve help from Randy Cox -- source cite

const rod1 = document.querySelector('#rod1')
const rod2 = document.querySelector('#rod2')
const rod3 = document.querySelector('#rod3')

let destinationStart = "pick item up"
let destinationEnd = null

const moveIt = function (evt) {
  // console.log('target: ' + evt.target.id)
  // console.log('currentTarget: ' + evt.currentTarget.id)
  const rod = evt.currentTarget
  if (destinationStart === 'pick item up') {
    const stone = rod.lastElementChild
    if (stone) {
      console.log('You picked up a stone: ' + stone.id)
      destinationEnd = stone
      destinationStart = 'dropped it'
    } else {
      console.log('No disc to pick up')
    }
   } else {
    if (rod.lastElementChild === null) {
      rod.append(destinationEnd) 
    //Recieved help From Drashti Dalsania  --- Source cite
    } else if(destinationEnd.dataset.width < rod.lastElementChild.dataset.width) {
      
      rod.append(destinationEnd)
    }
    destinationStart = 'pick item up'
  } 
  // else {
  //   console.log('You dropped item onto ' + rod.id)
  //   rod.append(destinationEnd)
  //   destinationStart = 'pick item up'
  // } 
    if(rod3.childElementCount === 4) {
      console.log('You Won!')
      alert('YOU WON!!!')
    }
}

rod1.addEventListener('click', moveIt)
rod2.addEventListener('click', moveIt)
rod3.addEventListener('click', moveIt)
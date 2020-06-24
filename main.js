//Recieved layout from Randy
let start = 'pick items up' //pick up
let destination = null
const moveIt = function (evt) {
//displays what is happening when clicked
// console.log('target ' + evt.target.id)
// console.log('currentTarget ' + evt.currentTarget.id)
const rod = evt.currentTarget
//gives a conditional if no stone
if (start === 'pick items up') {
  //pick up
  const stone= rod.lastElementChild
  if (stone) {
    console.log('you pick up stone ' + stone.id)
    destination = stone
    start = 'drop'
  }else {
    console.log('no disc to pick up')
  }
}else{
  //drop
  console.log('You dropped onto ' + rod.id)
  rod.append(destination)
  mode = 'pick items up'
}
}

let rod1 = document.querySelector('#rod1')
let rod2 = document.querySelector('#rod2')
let rod3 = document.querySelector('#rod3')


rod1.addEventListener('click', moveIt)
rod2.addEventListener('click', moveIt)
rod3.addEventListener('click', moveIt)
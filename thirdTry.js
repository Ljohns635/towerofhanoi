//FIRST FUNCTION

const backDropClicks = function (evt) {
  console.log(evt)
  const selection = evt.target.lastElementChild
  console.log(selection)
  const move = document.querySelector('#rod1')
  // const move2 = document.querySelector('#rod3')
  move.appendChild(selection)
  // move2.appendChild(selection)
  
  // selection.classList.add('new')

}

//SECOND FUNCTION
const backDropClicksTwo = function (evt) {
  console.log(evt)
  const selection = evt.target.lastElementChild
  console.log(selection)
  const move = document.querySelector('#rod2')
  move.appendChild(selection)
  // selection.classList.add('new')
}

//THIRD FUNCTION
const backDropClicksThree = function (evt) {
  console.log(evt)
  const selection = evt.target.lastElementChild
  console.log(selection)
  const move = document.querySelector('#rod3')
  move.appendChild(selection)
  // selection.classList.add('new')
}

//FOURTH FUNCTION
const backDropClicksFour = function (evt) {
  console.log(evt)
  const selection = evt.target.lastElementChild
  console.log(selection)
  const move = document.querySelector('#rod2')
  move.appendChild(selection)
  // selection.classList.add('new')
}

//FIFTH FUNCTION
// const backDropClicksFive = function (evt) {
//   console.log(evt)
//   const selection = evt.target.lastElementChild
//   console.log(selection)
//   selection.
//   const move = document.querySelector('.rod')
// }


//SELECT FIRST DIV
const whenClicked = document.querySelector('#rod1')
whenClicked.addEventListener('click', backDropClicks)

//SELECT MOVE TO SECOND DIV
const whenClickedAgain = document.querySelector('#rod2')
whenClicked.addEventListener('click', backDropClicksTwo)

//SELECT MOVE TO THIRD DIV
const whenClickedThird = document.querySelector('#rod3')
whenClickedAgain.addEventListener('click', backDropClicksThree)

//SELECT THIRD DIV AND MOVE TO SECOND
const whenClickedFour = document.querySelector('#rod3')
whenClickedThird.addEventListener('click', backDropClicksFour)

//SELECT SECOND DIV AND MOVE IT TO FIRST





  
// Something like, if(your variable is empty) { do this and 
//   give a value to the variable } 
  
//   else if (your variable isn't empty) {append child to the target 
//   then empty the variable } 
  
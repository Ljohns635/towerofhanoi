// const click1 = document.querySelector('#disc1')
// const click2 = document.querySelector('#disc2')
// const click3 = document.querySelector('#disc3')
// const click4 = document.querySelector('#disc4')


//Moving to the second Div

// click1.onclick = function (evt) {
//   const click1El = evt.target
//   // const click1Copy = click1El.cloneNode(true)
//   const secondSlot = document.querySelector('#rod2')
//   secondSlot.appendChild(click1El)
// }

// click2.onclick = function (evt) {
//   const click1El = evt.target
//   // const click1Copy = click1El.cloneNode(true)
//   const secondSlot = document.querySelector('#rod2')
//   secondSlot.appendChild(click1El)
// }
// click3.onclick = function (evt) {
//   const click1El = evt.target
//   // const click1Copy = click1El.cloneNode(true)
//   const secondSlot = document.querySelector('#rod2')
//   secondSlot.appendChild(click1El)
// }
// click4.onclick = function (evt) {
//   const click1El = evt.target
//   // const click1Copy = click1El.cloneNode(true)
//   const secondSlot = document.querySelector('#rod2')
//   secondSlot.appendChild(click1El)
// }

//refactor
const addStoneToSecond = function (evt) {
  const clickEl = evt.target
  const secondSlot = document.querySelector('#rod2')
  secondSlot.appendChild(clickEl)
}

//event delegation
// const click1 = document.querySelector('#disc1')
// click1.addEventListener('click', addStoneToSecond)
// const click2 = document.querySelector('#disc2')
// click2.addEventListener('click', addStoneToSecond)
// const click3 = document.querySelector('#disc3')
// click3.addEventListener('click', addStoneToSecond)
// const click4 = document.querySelector('#disc4')
// click4.addEventListener('click', addStoneToSecond)

const backDrop = document.querySelector('#container')
backDrop.addEventListener('click', addStoneToSecond)

//Guard clause
  // if(evt.target.className !== 'rod') {
  //   return
  // }

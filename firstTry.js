const click1 = document.querySelector('#disc1')
const click2 = document.querySelector('#disc2')
const click3 = document.querySelector('#disc3')
const click4 = document.querySelector('#disc4')

click1.onclick = function (evt) {
  console.log(evt)
  const click1El = evt.target
  // // const click1Copy = click1El.cloneNode(true)
  const secondSlot = document.querySelector('#rod2')
  secondSlot.appendChild(click1El)
}

click2.onclick = function (evt) {
  const click1El = evt.target
  // const click1Copy = click1El.cloneNode(true)
  const secondSlot = document.querySelector('#rod2')
  secondSlot.appendChild(click1El)
}

click3.onclick = function (evt) {
  const click1El = evt.target
  // const click1Copy = click1El.cloneNode(true)
  const secondSlot = document.querySelector('#rod2')
  secondSlot.appendChild(click1El)
}

click4.onclick = function (evt) {
  const click1El = evt.target
  // const click1Copy = click1El.cloneNode(true)
  const secondSlot = document.querySelector('#rod2')
  secondSlot.appendChild(click1El)
}



const towers = function (evt) {
  if(evt.target.className !== 'disc') {
    return
  }
  console.log(evt)
  const theTarget = evt.target
  const click1 = document.querySelector('#rod2')
  click1.appendChild(theTarget)

  theTarget.classList.add('selected')
  
}

const sectionTwo = function (evt) {
  console.group(evt)
  const newTarget = evt.target
  const newClick = document.querySelector('#rod3')
  newClick.appendChild(newTarget)

  newTarget.classList.add('newSelect')
}

const sectionOne = function (evt) {
  console.group(evt)
  const newTarget = evt.target
  const newClick = document.querySelector('#rod1')
  newClick.appendChild(newTarget)

  newTarget.classList.add('otherSelect')
}

//first function
const backDrop = document.querySelector('#disc1')
backDrop.addEventListener('click', towers)

const backDrop2 = document.querySelector('#disc2')
backDrop2.addEventListener('click', towers)

const backDrop3 = document.querySelector('#disc3')
backDrop3.addEventListener('click', towers)

const backDrop4 = document.querySelector('#disc4')
backDrop4.addEventListener('click', towers)

//second function
const firstBox = document.querySelector('#rod2')
firstBox.addEventListener('click', sectionTwo)

//third function
const secondBox = document.querySelector('#rod3')
secondBox.addEventListener('click', sectionOne)




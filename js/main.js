document.getElementById('purple').onclick = partyPurple
document.getElementById('blue').onclick = partyBlue
document.getElementById('blue2').onclick = partyBlue2
document.getElementById('blue3').onclick = partyBlue3
document.getElementById('blue4').onclick = partyBlue4
document.getElementById('green').onclick = partyGreen
document.getElementById('walrus').onclick = partyWalrus
document.getElementById('walrus2').onclick = partyWalrus2
document.getElementById('walrus3').onclick = partyWalrus3
document.getElementById('gradi').onclick = partyGradi


function partyPurple() {
  document.querySelector('body').style.backgroundColor = '#561b9f'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = '#0042b4'
  document.querySelector('body').style.color = 'white'
}

function partyBlue2() {
  document.querySelector('body').style.backgroundColor = '#0059bc'
  document.querySelector('body').style.color = '#000'
}

function partyBlue3() {
    document.querySelector('body').style.backgroundColor = '#006ab9'
    document.querySelector('body').style.color = 'white'
}

function partyBlue4() {
    document.querySelector('body').style.backgroundColor = '#0083a0'
    document.querySelector('body').style.color = 'rgb(255, 255, 255)'
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = '#008d94'
    document.querySelector('body').style.color = '#000'
}

function partyWalrus() {
    document.querySelector('body').style.backgroundColor = '#51968e'
    document.querySelector('body').style.color = 'rgb(255, 255, 255)'
}

function partyWalrus2() {
    document.querySelector('body').style.backgroundColor = '#789d8f'
    document.querySelector('body').style.color = '#561b9f'
}

function partyWalrus3() {
    document.querySelector('body').style.backgroundColor = '#96a499'
    document.querySelector('body').style.color = '#561b9f'
}

function partyGradi() {
    document.querySelector('body').style.backgroundColor = 'linear-gradient(to bottom, #561b9f, #96a499)'
    document.querySelector('body').style.color = 'rgb(255, 255, 255)'
}
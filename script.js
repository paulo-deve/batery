document.body.addEventListener('keyup', event => {
  playSound(event.code.toLowerCase())
})

document.querySelector('.composer button')
.addEventListener('click', event => {
  let song = document.querySelector('#input').value


    let songArrays = song.split('')
    playCompose(songArrays)

})

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`)

  let keyElement = document.querySelector(`div[data-key="${sound}"]`)

  if(audioElement) {
    audioElement.currentTime = 0
    audioElement.play()
  }

  if(keyElement) {
    keyElement.classList.add('active')

    setTimeout(() => {
      keyElement.classList.remove('active')
    }, 300)
  }
}

function playCompose(songArrays) {

  let wait = 0

  for(let songItem of songArrays) {

    setTimeout(() => { 

      playSound(`key${songItem}`)

    }, wait)

    wait += 270
  }
}
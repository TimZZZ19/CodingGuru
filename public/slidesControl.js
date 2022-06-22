const slidesWindow = document.querySelector('.slides-window')
const slidesControl = document.querySelector('.slides-control')
const firstSlide = document.getElementById('first-slide')
const headline1 = document.querySelector('.hero-subtitle-1')
const headline2 = document.querySelector('.hero-subtitle-2')
const headline3 = document.querySelector('.hero-subtitle-3')
const animationControlBtns = document.querySelector('.animation-control-btns')
const play = document.getElementById('play')
const pause = document.getElementById('pause')

let counter = 1
let isPaused = false
let timer = getTimer(counter)

slidesControl.addEventListener('click', (e) => {
  if (e.target.getAttribute('type') !== 'radio') return
  clearInterval(timer)

  const id = e.target.getAttribute('id')
  switch (id) {
    case 'radio-btn-1':
      counter = 1
      break
    case 'radio-btn-2':
      counter = 2
      break
    case 'radio-btn-3':
      counter = 3
  }

  switchHeadlineAndImage(counter)
  timer = getTimer(counter)
})

slidesWindow.addEventListener('click', (e) => {
  if (e.target.classList.contains('slides-control')) return

  isPaused = !isPaused

  if (isPaused) {
    play.classList.remove('hidden')
    pause.classList.add('hidden')
  } else {
    play.classList.add('hidden')
    pause.classList.remove('hidden')
  }
})

animationControlBtns.addEventListener('click', () => {})

function getTimer(counter) {
  return setInterval(() => {
    if (isPaused) return
    switchHeadlineAndImage(counter++)
    counter = counter > 3 ? 1 : counter
  }, 3000)
}

function switchHeadlineAndImage(currentCounter) {
  //switch the current radio
  document.getElementById(`radio-btn-${currentCounter}`).checked = true

  switch (currentCounter) {
    case 1:
      //switch the current headline
      headline2.classList.remove('text-gray-700')
      headline3.classList.remove('text-gray-700')
      headline1.classList.add('text-gray-700')

      // switch the current slide
      firstSlide.classList.remove('ml-1/4')
      firstSlide.classList.remove('ml-1/2')
      firstSlide.classList.add('ml-0')
      break
    case 2:
      //switch the current headline
      headline1.classList.remove('text-gray-700')
      headline3.classList.remove('text-gray-700')
      headline2.classList.add('text-gray-700')

      // switch the current slide
      firstSlide.classList.remove('ml-0')
      firstSlide.classList.remove('ml-1/2')
      firstSlide.classList.add('ml-1/4')
      break
    case 3:
      //switch the current headline
      headline1.classList.remove('text-gray-700')
      headline2.classList.remove('text-gray-700')
      headline3.classList.add('text-gray-700')

      // switch the current slide
      firstSlide.classList.remove('ml-0')
      firstSlide.classList.remove('ml-1/4')
      firstSlide.classList.add('ml-1/2')
  }
}

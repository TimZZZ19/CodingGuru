const radioBtn1 = document.getElementById('radio-btn-1')
const radioBtn2 = document.getElementById('radio-btn-2')
const radioBtn3 = document.getElementById('radio-btn-3')
const firstSlide = document.getElementById('first-slide')

radioBtn1.addEventListener('click', () => {
  firstSlide.classList.remove('ml-1/4')
  firstSlide.classList.remove('ml-1/2')

  firstSlide.classList.add('ml-0')
})

radioBtn2.addEventListener('click', () => {
  firstSlide.classList.remove('ml-0')
  firstSlide.classList.remove('ml-1/2')

  firstSlide.classList.add('ml-1/4')
})

radioBtn3.addEventListener('click', () => {
  firstSlide.classList.remove('ml-0')
  firstSlide.classList.remove('ml-1/4')

  firstSlide.classList.add('ml-1/2')
})

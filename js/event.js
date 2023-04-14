const error = document.querySelector('#error')
const error_1 = document.querySelector('.error_1')
const error_2 = document.querySelector('.error_2')
const error_3 = document.querySelector('.error_3')
const error_5 = document.querySelector('.error_5')
const error_6 = document.querySelector('.error_6')
const errorh1 = document.querySelector('#error h1')
const errorh2 = document.querySelector('#error h2')
const errorimg = document.querySelector('.logo_error')

error.addEventListener('mousemove', (e) => {
    let clientX = e.clientX
    let clientY = e.clientY

    error_1.style.left = `${-clientX / 50}px`
    error_1.style.top = `${-clientY / 50}px`
    
    error_2.style.left = `${-clientX / 70}px`
    error_2.style.top = `${-clientY / 70}px`

    error_3.style.left = `${-clientX / 80}px`
    error_3.style.top = `${-clientY / 80}px`

    error_5.style.left = `${-clientX / 50}px`
    error_5.style.top = `${-clientY / 50}px`

    error_6.style.left = `${-clientX / 50}px`
    error_6.style.top = `${-clientY / 50}px`

    errorh1.style.left = `${-clientX / 110}px`
    errorh1.style.top = `${-clientY / 110}px`

    errorh2.style.left = `${-clientX / 110}px`
    errorh2.style.top = `${-clientY / 110}px`

    errorimg.style.left = `${-clientX / 110}px`
    errorimg.style.top = `${-clientY / 110}px`

    // console.log(clientX, clientY);
})
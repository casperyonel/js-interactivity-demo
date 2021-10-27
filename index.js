// let count = 0
let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#reset-btn')
let plusBtn = document.querySelector('#plus-btn')
let counter = document.querySelector('#counter')

const increase = () => {
    counter.textContent++
}

const reset = () => {
    counter.textContent = 0
}

const decrease = () => {
    counter.textContent--
}

minusBtn.addEventListener('click', decrease)

resetBtn.addEventListener('click', reset)

plusBtn.addEventListener('click', increase)


let themeBtns = document.querySelectorAll('.theme-buttons')

const selectTheme = (event) => {
    let theme = event.target.textContent
    // I think this makes our class name to be = the textContent of the button
    // So themes.css says button.twitter

    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
    let btns = document.querySelectorAll('button')
    // This returns an array for btns, so we use counter

    for (let i = 0; i < btns.length; i+=) {
        btns[i].className = theme
    }
}

// adding event listener click for the buttons
for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', (event) => {
        selectTheme(event)    
    })
}
let ratingNumber = document.querySelectorAll('.number')
let submit = document.querySelector('.btn')
let container = document.querySelector('.container')
let submitContainer = document.querySelector('.submit-container')
let howMuchRating = document.getElementById('rating')



let length = 0;
ratingNumber.forEach(element => {
    element.addEventListener('click', () => {
        length = element.innerHTML
        howMuchRating.innerText = length
        activeNumber(element, length)

    })
});

function activeNumber(number, length) {
    if (2 > 1) {
        for (let index = 0; index < Number(length); index++) {
            ratingNumber[index].style.background = 'hsl(25, 97%, 53%)'
            ratingNumber[index].style.color = 'hsl(0, 0%, 100%)'
        }
    } else {
        number.style.background = 'hsl(25, 97%, 53%)'
        number.style.color = 'hsl(0, 0%, 100%)'
    }
}


submit.addEventListener('click', () => {
    container.style.display = 'none'
    submitContainer.style.display = 'block'

})
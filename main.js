// Create a conditional that checks age
// const age = Number(document.querySelector('input').value)
// If under 16, tell them they can't drive
// Under 18 can't hate for being too young to get in the club
// Under 21 they can't drink
// Under 25 can't retn a car affordibly
// Under 30 can't rent fancy car affordibly
// Under 30, nothing to look forward to




// ---Harder
// On click of the h1, take the value from the unput, place the result in the paragraph

document.querySelector('h1').addEventListener('click', ageCheck)
let p = document.querySelector('p')

    function ageCheck() {
    let age = Number(document.querySelector('input').value)

    if(age < 16) {
        p.innerText= 'You are too young to drive'
    }else if (age < 18) {
        p.innerText = 'You\'re too young to get in the club, don\'t be hatin!'
    }else if (age < 21) {
        p.innerText = 'You\'re too young to drink'
    }else if (age < 25) {
        p.innerText = 'You can\'t rent a car affordibly'        
    }else if (age < 30) {
        p.innerText = 'You can\'t rent a fancy car affordibly'
    }else if (age < 30 || age > 30) {
        p.innerText = 'Looking forward to 100Devs!'
    }else {
        p.innerText = 'Follow your dreams!'
    }
}
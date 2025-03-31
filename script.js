let buttons = document.querySelectorAll('button');
let submit = document.getElementById('enter');
let data = []
let display = document.querySelector('.display')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value == 'AC') {
            data = []
            display.setAttribute('value', '');
        } else {
            data.push(button.value)
            display.setAttribute('value', data.join(""))
        }
    })
});

submit.addEventListener('click', () => {
    let ans = display.getAttribute('value')
    try {
        let result = eval(ans);
        display.setAttribute('value', result);
        data = [];
    } catch (e) {
        display.setAttribute('value', 'Error');
    }
})
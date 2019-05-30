console.log('hello world')
console.log('hay dude')

document.addEventListener('DOMContentLoaded', () => {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    let square = document.querySelector('#square')
    let button = document.querySelector('#change-color')
    //button.addEventListener('click', () +> )
    square.style.backgroundColor = 'blue'
}
)

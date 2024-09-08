// Exercise 1
function pyramid(){
    let pyramidString = '#'

    while(pyramidString.length <= 7) {
        console.log(pyramidString)

        pyramidString += '#'
    }
}

//pyramid()

// Exercise 2
function fizzBuzz(){
    for(let i = 0; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if(i % 3 === 0) {
            console.log('Fizz')
        } else if(i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

//fizzBuzz()

function chessBoard() {
    let size = 8
    let chessBoardString = ''
    for(let i = 0; i < size; i++) {
        let previousChar
        if(i % 2 === 0) {
            previousChar = '#'
        } else {
            previousChar = ''
        }

        for (let x = 0; x < size; x++) {
            chessBoardString += previousChar
            previousChar = previousChar === '#' ? '' : '#'
        }

        chessBoardString += '\n'
    }


    console.log(chessBoardString)
}

chessBoard()
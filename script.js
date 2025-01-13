document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.game-box')
    const scoreDisplay = document.querySelector('#score')
    const width = 4
    let squares = []
    let score = 0

    function createBoard(){
        for(let i = 0; i < width *width; i++){
            const square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)    
                
        }
        generate() 
        generate() 
    }
    

    createBoard()

    function generate(){
        const randNumber = Math.floor(Math.random() * squares.length)
        if (squares[randNumber].innerHTML == 0){
            squares[randNumber].innerHTML = 2
        } else generate()
    }

    function moveRight() {
        for (let i = 0; i <16; i++){
            if(i % 4 == 0){
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
                let newRow = zeros.concat(filteredRow)
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
                
            }
        }
    }
    function moveLeft() {
        for (let i = 0; i <16; i++){
            if(i % 4 == 0){
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
                let newRow = filteredRow.concat(zeros)
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
                
            }
        }
    }
    function moveUp() {
        for (let i = 0; i < 4; i++){
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+4].innerHTML
            let totalThree = squares[i+8].innerHTML
            let totalFour = squares[i+12].innerHTML
            let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
            let filteredColumn = row.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = filteredColumn.concat(zeros)
            squares[i].innerHTML = newColumn[0]
            squares[i+4].innerHTML = newColumn[1]
            squares[i+8].innerHTML = newColumn[2]
            squares[i+12].innerHTML = newColumn[3]    
            }
        }
    function moveDown() {
        for (let i = 0; i < 4; i++){
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+4].innerHTML
            let totalThree = squares[i+8].innerHTML
            let totalFour = squares[i+12].innerHTML
            let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
            let filteredColumn = row.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = zeros.concat(filteredColumn)
            squares[i].innerHTML = newColumn[0]
            squares[i+4].innerHTML = newColumn[1]
            squares[i+8].innerHTML = newColumn[2]
            squares[i+12].innerHTML = newColumn[3]    
            }
        }
    

    function combineRow(){
        for (let i = 0; i < 15; i++){
            if (squares[i].innerHTML === squares[i+1].innerHTML){
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i+1].innerHTML = 0
                score += combinedTotal
                scoreDisplay.innerHTML =score
            }
        }
        // checkForWin()
    }
    function combineColumn(){
        for (let i = 0; i < 12; i++){
            if (squares[i].innerHTML === squares[i+4].innerHTML){
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+4].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i+4].innerHTML = 0
                score += combinedTotal
                scoreDisplay.innerHTML =score
            }
        }
        // checkForWin()
    }



    function control(e){
        if (e.key === 'ArrowLeft'){
            keyLeft()
        } else if (e.key === 'ArrowRight'){
            keyRight()
        } else if (e.key === 'ArrowUp'){
            keyUp()
        } else if (e.key === 'ArrowDown'){
            keyDown()
        } 
    }
    document.addEventListener('keydown', control)

    function keyLeft(){
        moveLeft()
        combineRow()
        moveLeft()
        generate()
    }

    function keyRight(){
        moveRight()
        combineRow()
        moveRight()
        generate()
    }
    function keyUp(){
        moveUp()
        combineColumn()
        moveUp()
        generate()
    }
    function keyDown(){
        moveDown()
        combineColumn()
        moveDown()
        generate()
    }
})





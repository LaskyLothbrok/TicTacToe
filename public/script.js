/*.addEventListener('click', () => {
    alert('click')
})*/
currentTurn = document.querySelector('#currentTurn')
const x = 'X'
const o = 'O'
cx = ''
co = ''
wx =0
wo = 0
turns = 0
winner = false
winPos = ["123", "456", "789", "147", "258", "369", "159", "357"]
/*              1 2 3
                4 5 6
                7 8 9   123-456-789-147-258-369-159-357            
            */
let buttons = document.querySelectorAll('.buttons')
buttons.forEach(button => {

    button.addEventListener('click', (event) => {
        button.disabled = true
        if (turns % 2){
            co += event.target.id
            currentTurn.innerText = 'CURRENT : X'
        }
        else{
            cx += event.target.id
            currentTurn.innerText = 'CURRENT : O'
        }

        winPos.forEach(wp => {
            wx = 0
            wo = 0
            wp.split('').forEach(l => {
                if (cx.includes(l)) 
                    wx++
                if (co.includes(l))
                    wo++

            })
            if (cx.length + co.length == 9) {
                document.querySelector('#winner').innerText = 'DRAW'
                winner = "true"
            }
            if (wx == 3){
                document.querySelector('#winner').innerText = 'WINNER: X'
                winner = "true"
            }
            if (wo == 3){ 
                document.querySelector('#winner').innerText = 'WINNER: O'
                winner = "true"

            }
            
            })

        event.target.innerText = x
        if (turns % 2) 
            event.target.innerText = o
        if (winner)
            buttons.forEach(button => button.disabled = true)       
        
        turns++        
        })
})
    


document.querySelector('#clear').addEventListener('click', clear)
function clear() {
    buttons.forEach(button => {
        button.innerText = ''
        currentTurn.innerText = 'X FIRST'
        cx = ''
        co = ''
        turns = 0
        winner = false
        button.disabled = false
    })
    }


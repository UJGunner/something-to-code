radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        if (1 == selections) {
            Ties += 1
            Score_Board()
        } else if (2 == selections) {
            Wins += 1
            Score_Board()
        } else {
            Loss += 1
            Score_Board()
        }
    }
    if (2 == receivedNumber) {
        if (1 == selections) {
            Loss += 1
            Score_Board()
        } else if (2 == selections) {
            Ties += 1
            Score_Board()
        } else {
            Wins += 1
            Score_Board()
        }
    }
    if (3 == receivedNumber) {
        if (1 == selections) {
            Wins += 1
            Score_Board()
        } else if (2 == selections) {
            Loss += 1
            Score_Board()
        } else {
            Ties += 1
            Score_Board()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (0 == Connection) {
        confirm += 1
    } else {
        selections += 1
    }
})
function Score_Board () {
    Rounds += 1
    OLED.clear()
    OLED.writeStringNewLine("P1 Points" + Wins)
    OLED.newLine()
    OLED.writeStringNewLine("P2 Points" + Loss)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
}
input.onButtonPressed(Button.AB, function () {
    if (0 == Connection) {
        Connection = confirm
    } else {
        radio.sendNumber(selections)
    }
})
input.onButtonPressed(Button.B, function () {
    if (0 == Connection) {
        confirm += -1
    } else {
        selections += -1
    }
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    Wins = 0
    Loss = 0
    Ties = 0
    Rounds = 0
    selections = 0
    Score_Board()
}
let Rounds = 0
let Loss = 0
let Wins = 0
let Ties = 0
let selections = 0
let confirm = 0
let Connection = 0
Connection = 0
confirm = 0
Reset()
basic.forever(function () {
    if (0 < Connection) {
        if (0 == selections) {
            selections += 3
        }
        if (1 == selections) {
            basic.showLeds(`
                # # # . .
                # . . # .
                # # # . .
                # . . # .
                # . . . #
                `)
        }
        if (2 == selections) {
            basic.showLeds(`
                # # # . .
                # . . # .
                # # # . .
                # . . . .
                # . . . .
                `)
        }
        if (3 == selections) {
            basic.showLeds(`
                . # # # .
                # . . . .
                . # # . .
                . . . # .
                # # # . .
                `)
        }
        if (4 <= selections) {
            selections += -3
        }
    }
})
basic.forever(function () {
    if (0 == Connection) {
        basic.showString("" + (confirm))
    }
    if (9 < confirm) {
        confirm = 9
    }
    if (0 > confirm) {
        confirm = 0
    }
})

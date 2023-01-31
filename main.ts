radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        if (1 == selections) {
            Ties += 1
            Score_Board()
        } else if (2 == selections) {
            Player_1_Points += 1
            Score_Board()
        } else {
            Player_2_Points += 1
            Score_Board()
        }
    }
    if (2 == receivedNumber) {
        if (1 == selections) {
            Player_2_Points += 1
            Score_Board()
        } else if (2 == selections) {
            Ties += 1
            Score_Board()
        } else {
            Player_1_Points += 1
            Score_Board()
        }
    }
    if (3 == receivedNumber) {
        if (1 == selections) {
            Player_1_Points += 1
            Score_Board()
        } else if (2 == selections) {
            Player_2_Points += 1
            Score_Board()
        } else {
            Ties += 1
            Score_Board()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    selections += 1
})
function Score_Board () {
    Rounds += 1
    OLED.clear()
    OLED.writeStringNewLine("P1 Points" + Player_1_Points)
    OLED.newLine()
    OLED.writeStringNewLine("P2 Points" + Player_2_Points)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(selections)
})
input.onButtonPressed(Button.B, function () {
    selections += -1
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    Player_1_Points = 0
    Player_2_Points = 0
    Ties = 0
    Rounds = 0
    selections = 0
    Score_Board()
}
let Rounds = 0
let Player_2_Points = 0
let Player_1_Points = 0
let Ties = 0
let selections = 0
Reset()
basic.forever(function () {
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
})

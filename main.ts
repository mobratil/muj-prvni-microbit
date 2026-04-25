// Při startu zobraz smajlíka
basic.showIcon(IconNames.Happy)

// Tlačítko A — zobraz text
input.onButtonPressed(Button.A, function () {
    basic.showString("Ahoj!")
})

// Tlačítko B — zobraz srdíčko
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

// Zatřesení — zobraz náhodné číslo 1-6 (kostka)
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})

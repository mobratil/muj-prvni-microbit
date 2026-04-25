let happiness = 5
let energy = 5

// Start
basic.showIcon(IconNames.Happy)

// Tlačítko A — nakrmit
input.onButtonPressed(Button.A, function () {
    energy = Math.min(energy + 2, 10)
    happiness = Math.min(happiness + 1, 10)
    basic.showIcon(IconNames.Heart)
    basic.pause(800)
    if (happiness > 7) {
        basic.showIcon(IconNames.Happy)
    } else if (happiness > 3) {
        basic.showIcon(IconNames.Meh)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

// Tlačítko B — hrát si
input.onButtonPressed(Button.B, function () {
    if (energy > 0) {
        energy += -1
        happiness = Math.min(happiness + 2, 10)
        basic.showIcon(IconNames.Surprised)
        basic.pause(300)
        basic.showIcon(IconNames.Happy)
        basic.pause(300)
        basic.showIcon(IconNames.Surprised)
        basic.pause(300)
    } else {
        basic.showIcon(IconNames.Asleep)
        basic.pause(1000)
    }
    if (happiness > 7) {
        basic.showIcon(IconNames.Happy)
    } else if (happiness > 3) {
        basic.showIcon(IconNames.Meh)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

// Zatřesení — radost
input.onGesture(Gesture.Shake, function () {
    happiness = Math.min(happiness + 1, 10)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    if (happiness > 7) {
        basic.showIcon(IconNames.Happy)
    } else if (happiness > 3) {
        basic.showIcon(IconNames.Meh)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

// A+B — statistiky
input.onButtonPressed(Button.AB, function () {
    basic.showString("H" + happiness)
    basic.pause(500)
    basic.showString("E" + energy)
    basic.pause(500)
    if (happiness > 7) {
        basic.showIcon(IconNames.Happy)
    } else if (happiness > 3) {
        basic.showIcon(IconNames.Meh)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

// Každých 30s ztrácí náladu
loops.everyInterval(30000, function () {
    happiness = Math.max(happiness - 1, 0)
    energy = Math.max(energy - 1, 0)
    if (happiness > 7) {
        basic.showIcon(IconNames.Happy)
    } else if (happiness > 3) {
        basic.showIcon(IconNames.Meh)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

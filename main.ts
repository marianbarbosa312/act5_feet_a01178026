input.onButtonPressed(Button.A, function () {
    basic.showNumber(feet)
    basic.showString("Feet")
    basic.showString("=")
    yards = feet / 3
    basic.showNumber(yards)
    basic.showString("Yards")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(feet)
    basic.showString("Feet")
    basic.showString("=")
    centimeters = feet / 0.032
    basic.showNumber(centimeters)
    basic.showString("Centimeters")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(feet)
    basic.showString("Feet")
    basic.showString("=")
    inches = feet / 0.834
    basic.showNumber(inches)
    basic.showString("Inches")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(feet)
    basic.showString("Feet")
    basic.showString("=")
    meters = feet / 3.28
    basic.showNumber(meters)
    basic.showString("Meters")
})
let meters = 0
let inches = 0
let centimeters = 0
let yards = 0
let feet = 0
feet = randint(1, 100)

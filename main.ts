radio.onReceivedValue(function (name, value) {
    if (name == "A") {
        basic.showArrow(ArrowNames.North)
        anglereçu = value
    } else if (name == "B") {
        basic.showArrow(ArrowNames.South)
        anglereçu = value
    } else if (name == "C") {
        anglereçu = value
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
})
let anglereçu = 0
let angle = 0
servos.P0.setAngle(angle)
let radioGroup = 90
radio.setGroup(radioGroup)
anglereçu = 90
basic.clearScreen()
basic.forever(function () {
    servos.P0.setAngle(angle)
})

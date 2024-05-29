function scoreUp () {
    score += 1
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        strip.clear()
        strip.show()
        basic.pause(200)
    }
}
function launch () {
    pixel = 0
    strip.clear()
    while (pixel < 10) {
        strip.setPixelColor(pixel, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        basic.pause(200)
        pixel += 1
    }
    strip.clear()
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    scoreUp()
})
input.onButtonPressed(Button.B, function () {
    launch()
})
let pixel = 0
let strip: neopixel.Strip = null
let score = 0
strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showNumber(score)
})

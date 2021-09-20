bitbot.select_model(BBModel.XL)
let Fart = 100
bitbot.ledClear()
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.go(BBDirection.Forward, Fart)
    } else if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, Fart)
        bitbot.move(BBMotor.Right, BBDirection.Forward, 0)
    } else if (false) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 0)
        bitbot.move(BBMotor.Right, BBDirection.Forward, Fart)
    } else {
        bitbot.go(BBDirection.Forward, Fart)
    }
})

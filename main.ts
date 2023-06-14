radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    }
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, velocidad)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
    }
    if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocidad)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
    }
    if (receivedNumber == 4) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
let velocidad = 0
velocidad = 30
radio.setGroup(1)

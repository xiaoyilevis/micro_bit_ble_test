bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    資料 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (資料.compare("F") == 0) {
        basic.showString("F")
    } else if (資料.compare("B") == 0) {
        basic.showString("B")
    } else if (資料.compare("L") == 0) {
        basic.showString("L")
    } else if (資料.compare("R") == 0) {
        basic.showString("R")
    } else if (資料.compare("A") == 0) {
        basic.showString("A")
    } else {
        if (資料.compare("S") == 0) {
            basic.showString("S")
        }
    }
})
let 資料 = ""
basic.showString("hello")
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startTemperatureService()
bluetooth.startUartService()
資料 = ""

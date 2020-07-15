input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendString("Lee bien")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(56)

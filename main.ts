OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("X:")
    OLED.writeNumNewLine(bitcommander.readJoystick(BCJoystick.X))
    OLED.writeString("Y:")
    OLED.writeNumNewLine(bitcommander.readJoystick(BCJoystick.Y))
    basic.pause(1000)
})

radio.onReceivedBuffer(function (receivedBuffer19) {
    oBuffer = i2c.fromBuffer(receivedBuffer19)
    lcd20x4.writeText(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 0, 12, 13, oBuffer.length(), lcd20x4.eAlign.right)
    lcd20x4.writeText(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 0, 14, 19, radio.receivedPacket(RadioPacketProperty.SignalStrength), lcd20x4.eAlign.right)
    lcd20x4.writeText(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 1, 0, 19, "" + bit.formatHex(radio.receivedPacket(RadioPacketProperty.SerialNumber), NumberFormat.Int32BE) + " " + radio.receivedPacket(RadioPacketProperty.Time))
    lcd20x4.setCursor(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 2, 0)
    lcd20x4.writeLCD(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), lcd20x4.lcd20x4_text(oBuffer.toHex()))
})
let oBuffer: i2c.i2cclass = null
lcd20x4.initLCD(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4))
lcd20x4.writeText(lcd20x4.lcd20x4_eADDR(lcd20x4.eADDR.LCD_20x4), 0, 0, 11, lcd20x4.lcd20x4_text("btBufferR-62"))
radio.setGroup(228)

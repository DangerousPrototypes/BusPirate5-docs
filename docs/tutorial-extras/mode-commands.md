---
sidebar_position: 3
sidebar_label: 'Mode Commands'
---

# Mode Commands

## Enter a bus mode {#enter_a_bus_mode}

`<nl2br>`{=html}\* Syntax error, type ? for help HiZ\>W No mode set, M
for mode **\<\<\<not allowed in HiZ** HiZ\>`</nl2br>`{=html} The Bus
Pirate always starts in [high
impedance](http://en.wikipedia.org/wiki/High_impedance) mode (HiZ), a
safe mode with all outputs disabled. It's intended to protect any
connected devices from conditions beyond their specifications.

If your terminal is blank, press enter to see the command prompt. Type
\'?\' to see a complete list of menu options and syntax available for
the current hardware and software. `<nl2br>`{=html}HiZ\>m
`<span style="text-decoration: underline;">`{=html}**\<\<\<configure bus
mode** `</span>`{=html}1. HiZ \... 4. I2C \... 10. LCD (1) \>4
`<span style="text-decoration: underline;">`{=html}**\<\<\< select I2C
(option 4)**`</span>`{=html} READY I2C\>`</nl2br>`{=html} We\'ll be
using a 24AA I2C [EEPROM](http://en.wikipedia.org/wiki/EEPROM) (data
storage chip) on the [3EEPROM explorer
board](3EEPROM_explorer_board "wikilink") to demonstrate some features.
*You don\'t need the chip to follow along, you won\'t damage anything by
following the tutorial without a chip.*

1.  Press \'M\' to configure a bus mode. Choose the I2C bus by typing 4
    followed by enter
2.  If requested, choose the default speed by simply pressing enter
3.  If requested, choose the default hardware mode by pressing enter

Steps 2 and 3 may not be available, depending on your hardware and
firmware version.

The Bus Pirate is now in I2C mode, you should see a *I2C\>* command
prompt.

### Macros

Macros are preprogrammed shortcuts. Some of the macros available
include: smart card interrogation, I2C address scanners, JTAG chain
probes, transparent UART bridges, LCD initialization, and bus sniffers.
`<nl2br>`{=html}I2C\>(0)`<span style="text-decoration: underline;">`{=html}**\<\<\<
show macro menu**`</span>`{=html} 0.Macro menu 1.7bit address search
2.I2C sniffer
I2C\>(1)**`<span style="text-decoration: underline;">`{=html}\<\<\<
macro 1, I2C address search`</span>`{=html}** Searching 7bit I2C address
space. Found devices at: 0xA0(0x50 W) 0xA1(0x50 R)
I2C\>`</nl2br>`{=html} Type (0) to get a list of macros in any mode. The
macro number can be entered in any format, (0x00) and (0b0) are also
valid macro entries.

I2C devices respond to a 7bit address. We could look up the address in
the datasheet, but instead we\'ll use the address scanner macro (1). The
Bus Pirate scaned all possible addresses and found the chip at 0x50
(0xa0/0xa1).

If you don\'t have an I2C chip attached for this tutorial, the Bus
Pirate won\'t find any I2C devices. If it finds devices at every
address, make sure there\'s powered pull-up resistors on the I2C bus
pins.

Read more about the [I2C address
scan](http://dangerousprototypes.com/2009/09/07/scan-for-i2c-read-and-write-addresses/).
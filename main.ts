controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Rlight.setPosition(81, 65)
    Glight.y = 200
    Ylight.y = 200
    scene.setBackgroundColor(1)
    STOP()
})
function GO () {
    robotbit.Servo(robotbit.Servos.S8, 180)
    pause(1000)
    strip.setAll(0x00ff00)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Glight.setPosition(81, 65)
    Rlight.y = 200
    Ylight.y = 200
    scene.setBackgroundColor(1)
    GO()
})
function STOP () {
    strip.setAll(0xff0000)
    robotbit.Servo(robotbit.Servos.S8, 0)
    pause(1000)
}
function AMBER () {
    strip.setAll(0xff0000)
    robotbit.Servo(robotbit.Servos.S8, 90)
    pause(1000)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Ylight.setPosition(81, 65)
    Glight.y = 200
    Rlight.y = 200
    scene.setBackgroundColor(1)
    AMBER()
})
let Ylight: Sprite = null
let Rlight: Sprite = null
let Glight: Sprite = null
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.P16, 30)
strip.setBrightness(20)
strip.clear()
Glight = sprites.create(img`
    ................................................................
    ........................777777777777777.........................
    ....................77777777777777777777777.....................
    ..................777777777777777777777777777...................
    ................7777777777777777777777777777777.................
    ..............77777777777777777777777777777777777...............
    .............7777777777777777777777777777777777777..............
    ............777777777777777777777777777777777777777.............
    ..........7777777777777777777777777777777777777777777...........
    .........777777777777777777777777777777777777777777777..........
    ........77777777777777777777777777777777777777777777777.........
    .......7777777777777777777777777777777777777777777777777........
    .......7777777777777777777777777777777777777777777777777........
    ......777777777777777777777777777777777777777777777777777.......
    .....77777777777777777777777777777777777777777777777777777......
    ....7777777777777777777777777777777777777777777777777777777.....
    ....7777777777777777777777777777777777777777777777777777777.....
    ...777777777777777777777777777777777777777777777777777777777....
    ...777777777777777777777777777777777777777777777777777777777....
    ..77777777777777777777777777777777777777777777777777777777777...
    ..77777777777777777777777777777777777777777777777777777777777...
    .7777777777777777777777777777777777777777777777777777777777777..
    .7777777777777777777777777777777777777777777777777777777777777..
    .7777777777777777777777777777777777777777777777777777777777777..
    .7777777777777777777777777777777777777777777777777777777777777..
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    777777777777777777777777777777777777777777777777777777777777777.
    .7777777777777777777777777777777777777777777777777777777777777..
    .7777777777777777777777777777777777777777777777777777777777777..
    .7777777777777777777777777777777777777777777777777777777777777..
    .7777777777777777777777777777777777777777777777777777777777777..
    ..77777777777777777777777777777777777777777777777777777777777...
    ..77777777777777777777777777777777777777777777777777777777777...
    ...777777777777777777777777777777777777777777777777777777777....
    ...777777777777777777777777777777777777777777777777777777777....
    ....7777777777777777777777777777777777777777777777777777777.....
    ....7777777777777777777777777777777777777777777777777777777.....
    .....77777777777777777777777777777777777777777777777777777......
    ......777777777777777777777777777777777777777777777777777.......
    .......7777777777777777777777777777777777777777777777777........
    .......7777777777777777777777777777777777777777777777777........
    ........77777777777777777777777777777777777777777777777.........
    .........777777777777777777777777777777777777777777777..........
    ..........7777777777777777777777777777777777777777777...........
    ............777777777777777777777777777777777777777.............
    .............7777777777777777777777777777777777777..............
    ..............77777777777777777777777777777777777...............
    ................7777777777777777777777777777777.................
    ..................777777777777777777777777777...................
    ....................77777777777777777777777.....................
    .......................7777777777777777.........................
    `, SpriteKind.Player)
Rlight = sprites.create(img`
    .......................22222222222222222........................
    ....................22222222222222222222222.....................
    ..................222222222222222222222222222...................
    ................2222222222222222222222222222222.................
    ..............22222222222222222222222222222222222...............
    .............2222222222222222222222222222222222222..............
    ...........22222222222222222222222222222222222222222............
    ..........2222222222222222222222222222222222222222222...........
    .........222222222222222222222222222222222222222222222..........
    ........22222222222222222222222222222222222222222222222.........
    .......2222222222222222222222222222222222222222222222222........
    ......222222222222222222222222222222222222222222222222222.......
    .....22222222222222222222222222222222222222222222222222222......
    .....22222222222222222222222222222222222222222222222222222......
    ....2222222222222222222222222222222222222222222222222222222.....
    ...222222222222222222222222222222222222222222222222222222222....
    ...222222222222222222222222222222222222222222222222222222222....
    ..22222222222222222222222222222222222222222222222222222222222...
    ..22222222222222222222222222222222222222222222222222222222222...
    .2222222222222222222222222222222222222222222222222222222222222..
    .2222222222222222222222222222222222222222222222222222222222222..
    222222222222222222222222222222222222222222222222222222222222222.
    222222222222222222222222222222222222222222222222222222222222222.
    222222222222222222222222222222222222222222222222222222222222222.
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222.
    222222222222222222222222222222222222222222222222222222222222222.
    222222222222222222222222222222222222222222222222222222222222222.
    .2222222222222222222222222222222222222222222222222222222222222..
    .2222222222222222222222222222222222222222222222222222222222222..
    ..22222222222222222222222222222222222222222222222222222222222...
    ..22222222222222222222222222222222222222222222222222222222222...
    ...222222222222222222222222222222222222222222222222222222222....
    ...222222222222222222222222222222222222222222222222222222222....
    ....2222222222222222222222222222222222222222222222222222222.....
    .....22222222222222222222222222222222222222222222222222222......
    .....22222222222222222222222222222222222222222222222222222......
    ......222222222222222222222222222222222222222222222222222.......
    .......2222222222222222222222222222222222222222222222222........
    ........22222222222222222222222222222222222222222222222.........
    .........222222222222222222222222222222222222222222222..........
    ..........2222222222222222222222222222222222222222222...........
    ...........22222222222222222222222222222222222222222............
    .............2222222222222222222222222222222222222..............
    ..............22222222222222222222222222222222222...............
    ................2222222222222222222222222222222.................
    ..................222222222222222222222222222...................
    ....................22222222222222222222222.....................
    `, SpriteKind.Player)
Ylight = sprites.create(img`
    ................................................................
    ........................555555555555555.........................
    ....................55555555555555555555555.....................
    ..................555555555555555555555555555...................
    ................5555555555555555555555555555555.................
    ..............55555555555555555555555555555555555...............
    .............5555555555555555555555555555555555555..............
    ............555555555555555555555555555555555555555.............
    ..........5555555555555555555555555555555555555555555...........
    .........555555555555555555555555555555555555555555555..........
    ........55555555555555555555555555555555555555555555555.........
    .......5555555555555555555555555555555555555555555555555........
    .......5555555555555555555555555555555555555555555555555........
    ......555555555555555555555555555555555555555555555555555.......
    .....55555555555555555555555555555555555555555555555555555......
    ....5555555555555555555555555555555555555555555555555555555.....
    ....5555555555555555555555555555555555555555555555555555555.....
    ...555555555555555555555555555555555555555555555555555555555....
    ...555555555555555555555555555555555555555555555555555555555....
    ..55555555555555555555555555555555555555555555555555555555555...
    ..55555555555555555555555555555555555555555555555555555555555...
    .5555555555555555555555555555555555555555555555555555555555555..
    .5555555555555555555555555555555555555555555555555555555555555..
    .5555555555555555555555555555555555555555555555555555555555555..
    .5555555555555555555555555555555555555555555555555555555555555..
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    555555555555555555555555555555555555555555555555555555555555555.
    .5555555555555555555555555555555555555555555555555555555555555..
    .5555555555555555555555555555555555555555555555555555555555555..
    .5555555555555555555555555555555555555555555555555555555555555..
    .5555555555555555555555555555555555555555555555555555555555555..
    ..55555555555555555555555555555555555555555555555555555555555...
    ..55555555555555555555555555555555555555555555555555555555555...
    ...555555555555555555555555555555555555555555555555555555555....
    ...555555555555555555555555555555555555555555555555555555555....
    ....5555555555555555555555555555555555555555555555555555555.....
    ....5555555555555555555555555555555555555555555555555555555.....
    .....55555555555555555555555555555555555555555555555555555......
    ......555555555555555555555555555555555555555555555555555.......
    .......5555555555555555555555555555555555555555555555555........
    .......5555555555555555555555555555555555555555555555555........
    ........55555555555555555555555555555555555555555555555.........
    .........555555555555555555555555555555555555555555555..........
    ..........5555555555555555555555555555555555555555555...........
    ............555555555555555555555555555555555555555.............
    .............5555555555555555555555555555555555555..............
    ..............55555555555555555555555555555555555...............
    ................5555555555555555555555555555555.................
    ..................555555555555555555555555555...................
    ....................55555555555555555555555.....................
    ........................555555555555555.........................
    `, SpriteKind.Player)
scene.setBackgroundColor(1)
AMBER()
STOP()

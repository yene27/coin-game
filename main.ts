let coin = game.createSprite(randint(0, 4), randint(0, 4))
let char = game.createSprite(2, 2)
while (true) {
    if (input.acceleration(Dimension.X) > 0) {
        char.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        char.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        char.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        char.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
}

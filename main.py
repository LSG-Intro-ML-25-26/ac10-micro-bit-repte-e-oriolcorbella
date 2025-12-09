x = 2
y = 2

while True:
    led.plot(x, y)
    pause(50)
    led.unplot(x, y)

    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)

    if accX < -150 and x > 0:
        x -= 1
    if accX > 150 and x < 4:
        x += 1

    if accY < -150 and y > 0:
        y -= 1
    if accY > 150 and y < 4:
        y += 1

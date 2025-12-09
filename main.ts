let accX: number;
let accY: number;
let x = 2
let y = 2
while (true) {
    led.plot(x, y)
    pause(50)
    led.unplot(x, y)
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    if (accX < -150 && x > 0) {
        x -= 1
    }
    
    if (accX > 150 && x < 4) {
        x += 1
    }
    
    if (accY < -150 && y > 0) {
        y -= 1
    }
    
    if (accY > 150 && y < 4) {
        y += 1
    }
    
}

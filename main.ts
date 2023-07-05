let 磁力X = 0
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    磁力X = input.magneticForce(Dimension.X)
    if (Math.abs(磁力X) > 450) {
        basic.showIcon(IconNames.Angry)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else if (Math.abs(磁力X) > 300) {
        basic.showIcon(IconNames.Surprised)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    } else if (Math.abs(磁力X) > 200) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            . # # # .
            `)
        music.play(music.tonePlayable(247, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (Math.abs(磁力X) > 100) {
        basic.showIcon(IconNames.Angry)
        music.play(music.tonePlayable(247, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})

function rodaD () {
    while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) != 0 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) != 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    }
    dir += 1
    ve += 1
    if (ve > 2) {
        ve = 0
        dir = 1
    }
}
function rodaE () {
    while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) != 0 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) != 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
    dir += -1
    vd += 1
    if (vd > 2) {
        vd = 0
        dir = 0
    }
}
let ve = 0
let vd = 0
let dir = 0
dir = 0
vd = 0
ve = 0
basic.showIcon(IconNames.No)
basic.pause(1000)
basic.clearScreen()
led.enable(false)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        if (dir == 0) {
            rodaD()
        } else if (dir == 1) {
            rodaE()
        }
    }
})

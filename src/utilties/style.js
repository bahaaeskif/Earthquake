export function styleBox(quake) {
    let color;
    const colors = {
        danger: 'bg-red-100',
        middle: "bg-yellow-100",
        underDanger: "bg-orange-100",
        normal: ' bg-blue-100'
    }
    if (quake.mag >= 0 && quake.mag < 3) {
        return color = colors.normal;
    } else if (quake.mag >= 3 && quake.mag < 4) {
        return color = colors.middle;
    } else if (quake.mag >= 4 && quake.mag < 5) {
        return color = colors.underDanger;
    } else {
        return color = colors.danger;
    }
}

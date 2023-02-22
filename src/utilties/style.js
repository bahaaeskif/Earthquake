export function styleBox(quake) {
    let color;
    const colors = {
        danger: 'bg-red-100',
        middle: "bg-yellow-100",
        normal: ' bg-blue-100'
    }
    if (quake.mag >= 0 && quake.mag <= 2) {
        return color = colors.normal;
    } else if (quake.mag > 2 && quake.mag <= 3.5) {
        return color = colors.middle;
    } else {
        return color = colors.danger;
    }
}

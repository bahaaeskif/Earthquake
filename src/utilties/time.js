export function calcTime(quake) {
    const minute = 1000 * 60;
    const hour = minute * 60;
    let away;
    var timeStamp = Date.parse(quake.date);

    if (Math.round((Date.now() - timeStamp) / minute) >= 60) {
        return away = `${Math.round((Date.now() - timeStamp) / hour)}h`
    } else {
        return away = `${Math.round((Date.now() - timeStamp) / minute)}min`
    }
}

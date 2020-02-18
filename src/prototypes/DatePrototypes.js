Date.prototype.subtractDays = function (d) {
    return new Date(this.getTime() - (d*24*60*60*1000));
}

Date.prototype.addDays = function (d) {
    return new Date(this.getTime() + (d*24*60*60*1000));
}

Date.prototype.toTime = function () {
    const h = this.getHours();
    const m = this.getMinutes();
    return (h < 10 ? '0' : '') + h + ":" + (m < 10 ? '0' : '') + m
}

Date.prototype.getMondayDate = function () {
    const d = new Date(this);
    const day = d.getDay();
    const diff = d.getDate() - day + (day == 0 ? -6 : 1);

    return new Date(d.setDate(diff));
}

Date.prototype.getWeekDateSpan = function () {
    let d = new Date(this);
    let day = d.getDay();
    let diff = d.getDate() - day + (day == 0 ? -6 : 1);

    let s = new Date(d.setDate(diff));
    s.setHours(0,0,0);

    let e = new Date(d.setDate(s.getDate() + 6));
    e.setHours(23,59,59);
    return {
        startDate: s,
        endDate: e
    }
}

Date.prototype.addMinutes = function (mins) {
    return new Date(this.getTime() + mins*60000);
}

Date.prototype.getUnixTimestamp = function () {
    return Math.floor(this.getTime() / 1000);
}
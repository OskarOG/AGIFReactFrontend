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
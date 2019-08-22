Date.prototype.subtractDays = function (d) {
    return new Date(this.getTime() - (d*24*60*60*1000));
}

Date.prototype.addDays = function (d) {
    return new Date(this.getTime() + (d*24*60*60*1000));
}
function Day(startDate) {
    this.startDate = startDate
}

let dprt = Day.prototype;

dprt.render = function () {
    let dayEl = document.createElement("div")



    dayEl.innerHTML = (this.startDate.getDate() + "." + this.startDate.getMonth() + "." + this.startDate.getFullYear())
    dayEl.className = "day"

    return dayEl


}

dprt = null



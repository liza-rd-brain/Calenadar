function emptyDay(startDate) {
    this.startDate = startDate

}

let edprt = emptyDay.prototype;

edprt.render = function () {

    let emptyDayEl = document.createElement("div")

    emptyDayEl.innerHTML = "0"
    emptyDayEl.className = "day"
    return emptyDayEl
}

edprt = null
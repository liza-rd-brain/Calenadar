//здесь будем рисовать строчку с именами дней недели
function DaysOfWeek(daysCount) {
    this.daysCount = daysCount
}

let dowprt = DaysOfWeek.prototype
dowprt.CLASS_NAME = "daysOfWeek"

dowprt.render = function () {
    let daysOfWeekEl = document.createElement("div");
    daysOfWeekEl.className = this.CLASS_NAME

    let i
    for (i = 0; i < this.daysCount; i++) {
        let nameOfDayEl = new NameOfDayEl(i).render()
        daysOfWeekEl.appendChild(nameOfDayEl)
    }
    return daysOfWeekEl
}
dowprt = null



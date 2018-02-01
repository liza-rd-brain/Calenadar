//здесь будем рисовать строчку с именами дней недели
function DaysOfWeek(daysCount, gridEl) {
    this.daysCount = daysCount
    this.gridEl = gridEl
}
let dowprt = DaysOfWeek.prototype
dowprt.CLASS_NAME = "daysOfWeek"

dowprt.render = function () {
    let daysOfWeekEl = document.createElement("div");
    daysOfWeekEl.className = this.CLASS_NAME
    this.gridEl.appendChild(daysOfWeekEl)
    let i
    for (i = 0; i < daysCount; i++) {
        let nameOfDayEl = new NameOfDayEl(daysOfWeekEl,i).render()
    }
}
dowprt = null



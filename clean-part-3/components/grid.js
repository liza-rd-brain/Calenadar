function Grid(startDate, systemDate, weekCount, daysCount, calendarEl) {
    this.startDate = startDate
    this.systemDate = systemDate
    this.weekCount = weekCount
    this.daysCount = daysCount
    this.calendarEl = calendarEl
}

let gprt = Grid.prototype
gprt.CLASS_NAME = "grid"

gprt.render = function () {
    let gridEl = document.createElement("div")
    gridEl.className = this.CLASS_NAME
    this.calendarEl.appendChild(gridEl)

    let daysOfWeekEl = new DaysOfWeek(this.daysCount, gridEl).render()
    let daysGridEl = new DaysGrid(this.startDate, this.systemDate, this.weekCount, this.daysCount , gridEl).render()
    return gridEl
}

gprt = null



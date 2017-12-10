function Grid(startDate, weekCount, daysCount, calendarEl) {
    this.startDate = startDate
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

    let daysOfWeekEl = new DaysOfWeek(daysCount, gridEl).render()
    let daysGridEl = new DaysGrid(startDate, weekCount, daysCount, gridEl).render()

}

gprt = null



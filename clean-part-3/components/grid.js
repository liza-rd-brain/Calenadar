function Grid(curentDate, systemDate, weekCount, daysCount, calendarEl) {
    this.curentDate = curentDate
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

    let daysOfWeekEl = new DaysOfWeek(daysCount, gridEl).render()
    let daysGridEl = new DaysGrid(curentDate,systemDate, weekCount, daysCount, gridEl).render()

}

gprt = null



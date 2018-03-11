function Grid(startDate, weekCount, daysCount) {
    this.startDate = startDate
    this.weekCount = weekCount
    this.daysCount = daysCount
    this.gridEl = null
}

let gprt = Grid.prototype
gprt.CLASS_NAME = "grid"

gprt.render = function () {
    this.gridEl = document.createElement("div")
    this.gridEl.className = this.CLASS_NAME
    let daysOfWeekEl = new DaysOfWeek(this.daysCount).render()
    let daysGridEl = new DaysGrid(this.startDate, this.weekCount, this.daysCount).render()
    this.gridEl.appendChild(daysOfWeekEl)
    this.gridEl.appendChild(daysGridEl)
    return this.gridEl
}

gprt = null



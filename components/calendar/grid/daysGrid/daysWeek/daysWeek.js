//поработать с переменными даты и с get
function DaysWeek(startDate, daysCount, firstDate) {
    this.startDate = startDate
    this.daysCount = daysCount
    this.firstDate = firstDate
    this.variableDate = this.startDate
}
let wprt = DaysWeek.prototype
wprt.CLASS_NAME = "daysWeek"

wprt.render = function () {
    let daysWeekEl = document.createElement("div")
    daysWeekEl.className = this.CLASS_NAME
    let year = this.variableDate.getFullYear()
    let month = this.variableDate.getMonth()
    let day = this.variableDate.getDate()
    for (let i = 1; i <= this.daysCount; i++) {
        let dayEl = new Day(this.variableDate, this.firstDate).render()
        daysWeekEl.appendChild(dayEl)
        this.variableDate = new Date(year, month, day + i)
    }
    return daysWeekEl;
}
wprt = null;











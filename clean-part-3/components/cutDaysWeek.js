function CutDaysWeek(startDate) {
    this.startDate = startDate
}
let cwprt = CutDaysWeek.prototype

cwprt.CLASS_NAME = "daysWeek"



cwprt.render = function () {

    let cutDaysCount = daysCount

    //let this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate())
    let cutDaysWeekEl = document.createElement("div")
    cutDaysWeekEl.className = "cutdaysWeek"

    //если имеем дело с воскресением
    if (startDate.getDay() === 0) {
        cutDaysCount = 1

        for (let i = 0; i < cutDaysCount; i++) {

            let dayEl = new Day(this.startDate).render()
            this.startDate = new Date(this.startDate.setDate(this.startDate.getDate() + 1))

            cutDaysWeekEl.appendChild(dayEl)
        }
    }

    //return cutDaysWeekEl

// или если имеем дело с непонедельником
    else if (startDate.getDay() != 1) {

        cutDaysCount = cutDaysCount - startDate.getDay() + 1

        for (let i = 0; i < cutDaysCount; i++) {

            let dayEl = new Day(this.startDate).render()
            this.startDate = new Date(this.startDate.setDate(this.startDate.getDate() + 1))

            cutDaysWeekEl.appendChild(dayEl)
        }
    }

    //return cutDaysWeekEl


// или имеем дело с понедельником
    else {
        for (let i = 0; i < cutDaysCount; i++) {

            let dayEl = new Day(this.startDate).render()
            this.startDate = new Date(this.startDate.setDate(this.startDate.getDate() + 1))

            cutDaysWeekEl.appendChild(dayEl)
        }
    }
    return cutDaysWeekEl


}

cwprt = null;



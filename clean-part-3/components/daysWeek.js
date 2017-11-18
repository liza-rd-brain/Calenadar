function DaysWeek(startDate, cutDaysWeek, daysCount, firstDate, lastDate) {
    this.startDate = startDate
    this.cutDaysWeek = cutDaysWeek
    this.daysCount = daysCount
    this.firstDate = firstDate
    this.lastDate = lastDate

}
let wprt = DaysWeek.prototype

wprt.CLASS_NAME = "daysWeek"

wprt.render = function () {

    let firstDate = new Date(this.firstDate.getFullYear(), this.firstDate.getMonth(), this.firstDate.getDate())
    let variableDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate())
    let daysWeekEl = document.createElement("div")

    daysWeekEl.className = "daysWeek"


    if (this.cutDaysWeek === true) {
        // cutDaysCount - количество дней в укороченной неделе
        let cutDaysCount
        //если имеем дело с воскресением
        if (variableDate.getDay() === 0) {
            cutDaysCount = 1

            for (let i = 0; i < cutDaysCount; i++) {

                let dayEl = new Day(variableDate).render()
                variableDate.setDate(variableDate.getDate() + 1)

                //variableDate = variableDate.setDate(variableDate.getDate() + 1)
                daysWeekEl.appendChild(dayEl)
            }
            let emptyel = new emptyDaysBlock(firstDate).render()
            daysWeekEl.insertBefore(emptyel, daysWeekEl.firstChild)
        }

        // или если имеем дело с непонедельником
        else if (variableDate.getDay() != 1) {
            cutDaysCount = daysCount - variableDate.getDay() + 1

            for (let i = 0; i < cutDaysCount; i++) {

                let dayEl = new Day(variableDate).render()
                variableDate.setDate(variableDate.getDate() + 1)

                //variableDate = new Date(variableDate.setDate(variableDate.getDate() + 1))
                daysWeekEl.appendChild(dayEl)
            }
            let emptyel = new emptyDaysBlock(firstDate).render()
            daysWeekEl.insertBefore(emptyel, daysWeekEl.firstChild)

        }

        // или имеем дело с понедельником - тоже строим обычную неделю
        //понедельник с true в cutDaysWeek может быть только последняя короткая неделя!!!!
        //здесь определили, что последняя короткая неделя рисуется до последнего дня!!!!!!!
        else {
            cutDaysCount = this.lastDate.getDay()
            for (let i = 0; i < cutDaysCount; i++) {
                cutDaysCount = this.lastDate.getDay()

                let dayEl = new Day(variableDate).render()
                variableDate.setDate(variableDate.getDate() + 1)
                daysWeekEl.appendChild(dayEl)
            }
            let emptyel = new emptyDaysBlock(firstDate).render()
            daysWeekEl.appendChild(emptyel)
        }
        //let emptyel = new emptyDaysBlock(firstDate).render()
        //daysWeekEl.insertBefore(emptyel, daysWeekEl.firstChild)

    }

    //cтроим обычную неделю
    else {
        // while (variableDate.getDate() < this.lastDate.getDate()) {

        for (let i = 0; i < daysCount; i++) {


            let dayEl = new Day(variableDate).render()
            variableDate.setDate(variableDate.getDate() + 1)
            daysWeekEl.appendChild(dayEl)
        }




    }
    return daysWeekEl;
}

wprt = null;
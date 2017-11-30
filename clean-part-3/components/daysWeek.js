function DaysWeek(startDate, firstWeek, daysCount, firstDate, lastDate) {
    this.startDate = startDate
    this.firstWeek = firstWeek
    this.daysCount = daysCount
    this.firstDate = firstDate
    this.lastDate = lastDate

}
let wprt = DaysWeek.prototype

/*let variableDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate())*/

wprt.CLASS_NAME = "daysWeek"
//выбор дней сделала псевдометодом
// не работает
/*_selectionsDay () = function () {
    for (let i = 0; i < daysCount; i++) {
        let dayAnotherMonth
        if (this.firstDate.getMonth() == variableDate.getMonth()) { dayAnotherMonth = false }
        else { dayAnotherMonth = true }
        let dayEl = new Day(variableDate, dayAnotherMonth).render()
        variableDate.setDate(variableDate.getDate() + 1)
        daysWeekEl.appendChild(dayEl)
    }
}*/

wprt.render = function () {
    let daysCount = this.daysCount
    let firstDate = this.firstDate
    let variableDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate())
    let daysWeekEl = document.createElement("div")

    daysWeekEl.className = this.CLASS_NAME

    function selectionsDay() {
        for (let i = 0; i < daysCount; i++) {
            let dayAnotherMonth
            if (firstDate.getMonth() == variableDate.getMonth()) { dayAnotherMonth = false }
            else { dayAnotherMonth = true }
            let dayEl = new Day(variableDate, dayAnotherMonth).render()
            variableDate.setDate(variableDate.getDate() + 1)
            daysWeekEl.appendChild(dayEl)
        }
    }


    if (this.firstWeek == true) {
        //воскресение
        if (variableDate.getDay() === 0) {
            // здесь находим дату ближайшего понедельника
            variableDate.setDate(variableDate.getDate() - 6)
            selectionsDay()
        }

        // не понедельник
        else if (variableDate.getDay() != 1) {
            //аналогично находим дату ближайшего понедельника
            variableDate.setDate(variableDate.getDate() - variableDate.getDay() + 1)
            selectionsDay()
        }

        //понедельник
        else {
            variableDate.setDate(variableDate.getDate() - 7)
            selectionsDay()
        }
    }

    //cтроим обычную неукороченную неделю или последнюю укороченную
    else {
        selectionsDay()
    }

    return daysWeekEl;
}

wprt = null;











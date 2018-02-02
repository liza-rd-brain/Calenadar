function DaysWeek(variableDate, firstWeek, daysCount, firstDate, lastDate, startDate, systemDate) {
    this.variableDate = variableDate
    this.firstWeek = firstWeek
    this.daysCount = daysCount
    this.firstDate = firstDate
    this.lastDate = lastDate
    this.startDate = startDate
    this.systemDate = systemDate
}

let wprt = DaysWeek.prototype

wprt.CLASS_NAME = "daysWeek"

wprt._selectionsDay = function (/*this.variableDate,*/ daysWeekEl) {
    for (let i = 0; i < daysCount; i++) {
        let dayAnotherMonth
        if (this.firstDate.getMonth() == this.variableDate.getMonth()) { dayAnotherMonth = false }
        else { dayAnotherMonth = true }
        let dayEl = new Day(this.variableDate, dayAnotherMonth, this.startDate, this.systemDate).render()
        this.variableDate.setDate(this.variableDate.getDate() + 1)
        daysWeekEl.appendChild(dayEl)
    }
}

wprt.render = function () {
    let daysCount = this.daysCount
    let firstDate = this.firstDate
    /*let this.variableDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate())*/
    let daysWeekEl = document.createElement("div")
    daysWeekEl.className = this.CLASS_NAME



    if (this.firstWeek == true) {
        //воскресение
        if (this.variableDate.getDay() === 0) {
            // здесь находим дату ближайшего понедельника
            this.variableDate.setDate(this.variableDate.getDate() - 6)
            this._selectionsDay(/*this.variableDate,*/ daysWeekEl)
        }

        // не понедельник
        else if (this.variableDate.getDay() != 1) {
            //аналогично находим дату ближайшего понедельника
            this.variableDate.setDate(this.variableDate.getDate() - this.variableDate.getDay() + 1)
            this._selectionsDay(/*this.variableDate,*/  daysWeekEl)

        }

        //понедельник
        else {
            this.variableDate.setDate(this.variableDate.getDate() - 7)
            this._selectionsDay(/*this.variableDate,*/ daysWeekEl)
        }
    }

    //cтроим обычную неукороченную неделю или последнюю укороченную
    else {
        this._selectionsDay(/*this.variableDate,*/ daysWeekEl)
    }




    return daysWeekEl;
}

wprt = null;











function DaysWeek(startDate, firstWeek, daysCount, firstDate, lastDate) {
    this.startDate = startDate
    this.firstWeek = firstWeek
    this.daysCount = daysCount
    this.firstDate = firstDate
    this.lastDate = lastDate
}

let wprt = DaysWeek.prototype

wprt.CLASS_NAME = "daysWeek"

wprt._selectionsDay = function (variableDate,daysWeekEl) {
    for (let i = 0; i < daysCount; i++) {
        let dayAnotherMonth
        if (this.firstDate.getMonth() == variableDate.getMonth()) { dayAnotherMonth = false }
        else { dayAnotherMonth = true }
        let dayEl = new Day(variableDate, dayAnotherMonth).render()
        variableDate.setDate(variableDate.getDate() + 1)
        daysWeekEl.appendChild(dayEl)
    }
}

wprt.render = function () {
    let daysCount = this.daysCount
    let firstDate = this.firstDate
    let variableDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate())
    let daysWeekEl = document.createElement("div")
    daysWeekEl.className = this.CLASS_NAME
    
    
  
    if (this.firstWeek == true) {
        //воскресение
        if (variableDate.getDay() === 0) {
            // здесь находим дату ближайшего понедельника
            variableDate.setDate(variableDate.getDate() - 6)
            this._selectionsDay(variableDate,daysWeekEl)
        }

        // не понедельник
        else if (variableDate.getDay() != 1) {
            //аналогично находим дату ближайшего понедельника
            variableDate.setDate(variableDate.getDate() - variableDate.getDay() + 1)
            this._selectionsDay(variableDate,daysWeekEl)
            
        }

        //понедельник
        else {
            variableDate.setDate(variableDate.getDate() - 7)
            this._selectionsDay(variableDate,daysWeekEl)
        }
    }

    //cтроим обычную неукороченную неделю или последнюю укороченную
    else {
        this._selectionsDay(variableDate,daysWeekEl)
    }
     



    return daysWeekEl;
}

wprt = null;











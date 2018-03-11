function CurrentMonth(startDate) {
    this.startDate = startDate
}
cmprt = CurrentMonth.prototype
cmprt.CLASS_NAME = "currentMonth"

cmprt.NAME_OF_MONTH = ["Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"]
    
cmprt.render = function () {
    let currentMonthEl = document.createElement("div")
    currentMonthEl.className = this.CLASS_NAME
    currentMonthEl.innerHTML = this.NAME_OF_MONTH[this.startDate.getMonth()]
    return currentMonthEl
}


cmprt = null



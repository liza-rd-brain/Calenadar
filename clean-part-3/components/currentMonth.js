function CurrentMonth(curentDate, navigatorEl) {
    this.curentDate = curentDate
    this.navigatorEl = navigatorEl
}
cmprt = CurrentMonth.prototype
cmprt.CLASS_NAME = "currentMonth"
cmprt.render = function () {
    let nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    let currentMonthEl = document.createElement("div")
    currentMonthEl.className = this.CLASS_NAME
    currentMonthEl.innerHTML = nameMonth[this.curentDate.getMonth()]
    this.navigatorEl.appendChild(currentMonthEl)
}
cmprt = null



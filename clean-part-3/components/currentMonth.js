function CurrentMonth(startDate, navigatorEl) {
    this.startDate = startDate
    this.navigatorEl = navigatorEl
}
cmprt = CurrentMonth.prototype
cmprt.CLASS_NAME = "currentMonth"
let nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]


cmprt.render = function () {
    let currentMonthEl = document.createElement("div")
    currentMonthEl.className = this.CLASS_NAME
    currentMonthEl.innerHTML = nameMonth[this.startDate.getMonth()]

    this.navigatorEl.appendChild(currentMonthEl)

    /*this.navigatorEl.insertBefore(currentMonthEl,document.getElementsByClassName("rightArrow")[0])*/
   
}


cmprt = null



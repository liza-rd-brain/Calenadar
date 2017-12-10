function NameOfDayEl(daysOfWeekEl,i) {
    this.daysOfWeekEl = daysOfWeekEl
    this.i = i
}

let nodprt = NameOfDayEl.prototype
nodprt.CLASS_NAME = "nameOfDay"

nodprt.render = function () {

    let nameOfDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

    let nameOfDayEl = document.createElement("div")
    nameOfDayEl.className = this.CLASS_NAME
    nameOfDayEl.innerHTML = nameOfDays[this.i]
    this.daysOfWeekEl.appendChild(nameOfDayEl)

}
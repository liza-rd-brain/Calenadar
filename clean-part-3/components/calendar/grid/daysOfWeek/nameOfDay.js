function NameOfDayEl(i) {
    this.i = i
}

let nodprt = NameOfDayEl.prototype
nodprt.CLASS_NAME = "nameOfDay"

nodprt.NAME_OF_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

nodprt.render = function () {
    let nameOfDayEl = document.createElement("div")
    nameOfDayEl.className = this.CLASS_NAME
    nameOfDayEl.innerHTML = this.NAME_OF_DAYS[this.i]
    return nameOfDayEl
}
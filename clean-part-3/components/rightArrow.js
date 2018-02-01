function RightArrow(navigatorEl, updateCalendar) {
    this.navigatorEl = navigatorEl
    this.updateCalendar = updateCalendar
}

raprt = RightArrow.prototype
raprt.CLASS_NAME = "rightArrow"

raprt.render = function () {
    let rightArrowEl = document.createElement("div")
    rightArrowEl.className = this.CLASS_NAME
    rightArrowEl.innerHTML = ">"
    rightArrowEl.data = "right"
    this.navigatorEl.appendChild(rightArrowEl)
    rightArrowEl.addEventListener("click", this.updateCalendar )

    //обработала щелчок ч-з jQuery по классу объекта
    /*$(".rightArrow").click(this.updateCalendar)*/
}
raprt = null



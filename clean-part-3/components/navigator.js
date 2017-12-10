function Navigator(curentDate, calendarEl) {
    this.curentDate = curentDate
    this.calendarEl = calendarEl
}

let nprt = Navigator.prototype
nprt.CLASS_NAME = "navigator"

nprt.render = function () {

    let navigatorEl = document.createElement("div")
    navigatorEl.className = this.CLASS_NAME
    this.calendarEl.appendChild(navigatorEl)

    let leftArrowEl = new LeftArrow(navigatorEl).render()
    let currentMonthEl = new CurrentMonth(curentDate, navigatorEl).render()
    let rightArrowEl = new RightArrow(navigatorEl).render()

}


nprt = null


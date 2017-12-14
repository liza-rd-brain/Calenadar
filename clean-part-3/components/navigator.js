function Navigator(curentDate, calendarEl, previousGrid, followingGrid) {
    this.curentDate = curentDate
    this.calendarEl = calendarEl
    this.previousGrid = previousGrid
    this.followingGrid = followingGrid

}

let nprt = Navigator.prototype
nprt.CLASS_NAME = "navigator"

nprt.render = function () {

    let navigatorEl = document.createElement("div")
    navigatorEl.className = this.CLASS_NAME
    document.getElementsByClassName("calendar")[0].appendChild(navigatorEl)

    let leftArrowEl = new LeftArrow(navigatorEl, this.previousGrid).render()
    let currentMonthEl = new CurrentMonth(curentDate, navigatorEl).render()
    let rightArrowEl = new RightArrow(navigatorEl,this.followingGrid).render()

}

nprt = null


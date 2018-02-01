function LeftArrow(navigatorEl, updateCalendar) {
    this.navigatorEl = navigatorEl
    this.updateCalendar = updateCalendar
}

laprt = LeftArrow.prototype
laprt.CLASS_NAME = "leftArrow"

laprt.render = function () {
    let leftArrowEl = document.createElement("div")
    leftArrowEl.className = this.CLASS_NAME
    leftArrowEl.innerHTML = "<"  
    leftArrowEl.data = "left"  
    this.navigatorEl.appendChild(leftArrowEl)
    leftArrowEl.addEventListener("click", this.updateCalendar )

    /*leftArrowEl.onclick =this.updateCalendar */
    /*$(".leftArrow").click(this.updateCalendar)*/
}
laprt = null
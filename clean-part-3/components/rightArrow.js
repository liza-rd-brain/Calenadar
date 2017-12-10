function RightArrow(navigatorEl) {
    this.navigatorEl = navigatorEl
}

raprt = RightArrow.prototype
raprt.CLASS_NAME = "rightArrow"

raprt.render = function () {
    let rightArrowEl = document.createElement("div")
    rightArrowEl.className = this.CLASS_NAME
    rightArrowEl.innerHTML = ">"
    this.navigatorEl.appendChild(rightArrowEl)
}


raprt = null


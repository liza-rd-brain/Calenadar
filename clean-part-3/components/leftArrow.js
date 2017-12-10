function LeftArrow(navigatorEl) {
    this.navigatorEl = navigatorEl
}

laprt = LeftArrow.prototype
laprt.CLASS_NAME = "leftArrow"

laprt.render = function () {
    let leftArrowEl = document.createElement("div")
    leftArrowEl.className = this.CLASS_NAME
    leftArrowEl.innerHTML = "<"
    this.navigatorEl.appendChild(leftArrowEl)
}


laprt = null
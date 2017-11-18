function emptyDaysBlock(startDate) {
    this.startDate = startDate
}

let edbprt = emptyDaysBlock.prototype;

edbprt.render = function () {
    let variableDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate())

    let emptyDaysBlockEl = document.createElement("div")
    emptyDaysBlockEl.className = "emptyDaysBlock"

    if (variableDate.getDay() === 0) {
        let emptyBlock = 6

        for (let i = 0; i < emptyBlock; i++) {

            let emptyDayEl = new emptyDay(variableDate).render()

            emptyDaysBlockEl.appendChild(emptyDayEl)
        }

        return emptyDaysBlockEl
    }

    else if (variableDate.getDay() !== 1) {
        let emptyBlock = variableDate.getDay() - 1

        for (let i = 0; i < emptyBlock; i++) {

            let emptyDayEl = new emptyDay(variableDate).render()

            emptyDaysBlockEl.appendChild(emptyDayEl)

        }
        return emptyDaysBlockEl
    }

    else {
        let emptyBlock = 0

        for (let i = 0; i < emptyBlock; i++) {

            let emptyDayEl = new emptyDay(variableDate).render()

            emptyDaysBlockEl.appendChild(emptyDayEl)
        }
        return emptyDaysBlockEl
    }

}

edbprt = null
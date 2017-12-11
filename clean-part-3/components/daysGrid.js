function DaysGrid(startDate, weekCount, daysCount, gridEl) {
    this.startDate = startDate
    this.weekCount = weekCount
    this.daysCount = daysCount
    this.gridEl = gridEl
}

let dgprt = DaysGrid.prototype
dgprt.CLASS_NAME = "daysGrid"

dgprt.render = function () {
    let lastDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 0)
    let firstDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), 1)
    let variableDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate())

    let daysGridEl = document.createElement("div");
    daysGridEl.className = this.CLASS_NAME
    this.gridEl.appendChild(daysGridEl)

    //потому что пока не знаю как иначе
    //проверка: укороченная ли первая неделя-?!
    let cutStartDaysCount
    if (firstDate.getDay() === 0) {
        cutStartDaysCount = 1
    }
    else if (firstDate.getDay() != 1) {
        cutStartDaysCount = daysCount - firstDate.getDay() + 1
    }
    else {
        cutStartDaysCount = 0
    }

    //рисуем недели, начинаем с первой недели
    for (i = 1; i <= weekCount; i++) {

        // если рисуем первую неделю
        if (i === 1) {

            var firstWeek = true
            let daysWeekEl = new DaysWeek(variableDate, firstWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + cutStartDaysCount)
        }

        // если мы рисуем рядовую полную неделю или последнюю неделю
        else {

            let firstWeek = false
            let daysWeekEl = new DaysWeek(variableDate, firstWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + daysCount)
        }

    }


    return daysGridEl;
}
dgprt.renderPrevios = function () {
    let lastDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 0)
    let firstDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), 1)
    let variableDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate())

    let daysGridEl = document.createElement("div");
    daysGridEl.className = this.CLASS_NAME
    
    document.getElementsByClassName("grid")[0].replaceChild(daysGridEl,document.getElementsByClassName("daysGrid")[0])
    

    //потому что пока не знаю как иначе
    //проверка: укороченная ли первая неделя-?!
    let cutStartDaysCount
    if (firstDate.getDay() === 0) {
        cutStartDaysCount = 1
    }
    else if (firstDate.getDay() != 1) {
        cutStartDaysCount = daysCount - firstDate.getDay() + 1
    }
    else {
        cutStartDaysCount = 0
    }

    //рисуем недели, начинаем с первой недели
    for (i = 1; i <= weekCount; i++) {

        // если рисуем первую неделю
        if (i === 1) {

            var firstWeek = true
            let daysWeekEl = new DaysWeek(variableDate, firstWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + cutStartDaysCount)
        }

        // если мы рисуем рядовую полную неделю или последнюю неделю
        else {

            let firstWeek = false
            let daysWeekEl = new DaysWeek(variableDate, firstWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + daysCount)
        }

    }
    

    return daysGridEl;
}
dgprt.renderFollowing = function () {
    let lastDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 0)
    let firstDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), 1)
    let variableDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate())

    let daysGridEl = document.createElement("div");
    daysGridEl.className = this.CLASS_NAME
    
    document.getElementsByClassName("grid")[0].replaceChild(daysGridEl,document.getElementsByClassName("daysGrid")[0])
    

    //потому что пока не знаю как иначе
    //проверка: укороченная ли первая неделя-?!
    let cutStartDaysCount
    if (firstDate.getDay() === 0) {
        cutStartDaysCount = 1
    }
    else if (firstDate.getDay() != 1) {
        cutStartDaysCount = daysCount - firstDate.getDay() + 1
    }
    else {
        cutStartDaysCount = 0
    }

    //рисуем недели, начинаем с первой недели
    for (i = 1; i <= weekCount; i++) {

        // если рисуем первую неделю
        if (i === 1) {

            var firstWeek = true
            let daysWeekEl = new DaysWeek(variableDate, firstWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + cutStartDaysCount)
        }

        // если мы рисуем рядовую полную неделю или последнюю неделю
        else {

            let firstWeek = false
            let daysWeekEl = new DaysWeek(variableDate, firstWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + daysCount)
        }

    }
    

    return daysGridEl;
}

dgprt = null




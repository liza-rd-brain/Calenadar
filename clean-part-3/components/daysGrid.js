function DaysGrid(startDate, weekCount, daysCount) {
    this.startDate = startDate
    this.weekCount = weekCount
    this.daysCount = daysCount
}

let dgprt = DaysGrid.prototype

dgprt.CLASS_NAME = "daysGrid";

dgprt.render = function () {

    //последний день месяца или его стоит определить в main.js???
    //последний день в календаре - это последний день месяца, дальше - пустые элементы
    let lastDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 0)
    //первый день месяца:т.е какой-бы день к нам не пришел в startDate, календарь строим с первого числа! возвращает дату!!!!!
    let firstDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), 1)
    //variableDate будем менять уже от стартовой даты до финишной в текущем месяце!
    let variableDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate())

    //день недели последнего дня месяца
    //последний понедельник месяца
    //curentWeekCount

    let daysGridEl = document.createElement("div");
    daysGridEl.className = "daysGrid"

    //определим здесь cutDaysCount, иначе как нам изменять изолированно variableDate...
    // cutDaysCount - количество дней в укороченной неделе
    let cutDaysCount
    if (firstDate.getDay() === 0) {
        cutDaysCount = 1
    }
    else if (firstDate.getDay() != 1) {
        cutDaysCount = daysCount - firstDate.getDay() + 1
    }
    else {
        cutDaysCount = 0
    }
    //поменяла i на еденицу, так понятнее вести счет недель!!!!!
    for (i = 1; i <= weekCount; i++) {
        // если рисуем первую неделю и первый день не понедельник
        if (i === 1 && firstDate.getDay() != 1) {

            let cutDaysWeek = true
            let daysWeekEl = new DaysWeek(variableDate, cutDaysWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + cutDaysCount)
        }
        /*// если рисуем последнюю неделю
        if (i === weekCount && lastDate.getMonth()<variableDate.getMonth()) {

            let cutDaysWeek = true
            let daysWeekEl = new DaysWeek(variableDate, cutDaysWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + cutDaysCount)

        }*/


        // если мы рисуем последнюю неделю
        else if (i < weekCount && lastDate.getDate() - 6 >= variableDate.getDate()) {

            let cutDaysWeek = false
            let daysWeekEl = new DaysWeek(variableDate, cutDaysWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + 7)
        }

        else if (lastDate.getMonth() < variableDate.getMonth()) {

            let cutDaysWeek = true
            let daysWeekEl = new DaysWeek(variableDate, cutDaysWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + 7)
        }


        else {
            let cutDaysWeek = true
            let daysWeekEl = new DaysWeek(variableDate, cutDaysWeek, daysCount, firstDate, lastDate).render()
            daysGridEl.appendChild(daysWeekEl)
            variableDate.setDate(variableDate.getDate() + cutDaysCount)

        }
    }
    //прописать укороченную неделю для последней недели месяца!!!*/



    return daysGridEl;

}

dgprt = null





    /*let i
    for (i = 0; i < weekCount; i++) {
        //let variableDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate())

        // если мы имеем дело с первой неделей...
        if (i === 0) {

            //...то рисуем урезанную неделю...
            let cutDaysWeekEl = new CutDaysWeek(variableDate).render()

            // и рисуем пустые элементы!!!
            var emptyel = new emptyDaysBlock(variableDate).render()
            cutDaysWeekEl.insertBefore(emptyel, cutDaysWeekEl.firstChild)
            daysGridEl.appendChild(cutDaysWeekEl)
        
        }
        // иначе рисуем нормальную неделю!!!!
        else {
            
            let daysWeekEl = new DaysWeek(variableDate).render()
            daysGridEl.appendChild(daysWeekEl)
        }
     
    }*/
const START_YEAR = 2018;

const monthNamesDic = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
};


export const getMonthString = () => {
    let monthStringsArray = [];
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    let tmpYear = START_YEAR;
    while (tmpYear <= curYear){
        let maxMonth = 12;
        if (tmpYear === curYear){
            maxMonth = curDate.getMonth() + 1;
        }
        for ( let month = 1; month <= maxMonth; month++){
            const tmpYearString = `${monthNamesDic[month]} ${tmpYear}`;
            monthStringsArray.push(tmpYearString);
        }
        tmpYear++;
    }
    return monthStringsArray;
}

export const getMonthName = (month) => {return monthNamesDic[month]}

export const getCurMonthString = () => {
    const curDate = new Date();
    return getMonthName(curDate.getMonth() + 1);
}

export const getMonthIndex = monthName => {
    for (let i = 1; i <= 12; i++){
        if(monthNamesDic[i] === monthName){
            return i;
        }
    }
}
export const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const getDateFromTimeMillis = (timeMillis)=> {
    let date = new Date(timeMillis);
    return `${date.getDate()} ${monthName[date.getMonth()]}, ${date.getFullYear()}`
}

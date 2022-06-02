export default (time) => {
    // console.log(time);
    const anHour = 1000 * 60 * 60
    const anMinute = 1000 * 60
    let hour = Math.floor(time / anHour)
    let minute = Math.floor((time - (hour * anHour)) / anMinute)
    let second = Math.floor((time - (hour * anHour) - (minute * anMinute)) / (anMinute / 60))
    if (hour < 10) hour = "0" + hour  
    if (minute < 10) minute = "0" + minute  
    if (second < 10) second = "0" + second  
    return {hour,minute,second}
}
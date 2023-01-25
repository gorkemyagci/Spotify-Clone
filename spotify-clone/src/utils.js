function secondsToTime(time) {
    return new Date(1 * time)
    .toISOString()
    .substring(14,19)
}
export{
    secondsToTime
}
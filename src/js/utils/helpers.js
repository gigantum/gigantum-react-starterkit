
/**
 * returns the number of hours until a commute
 * @param {number} commuteTime
 * @param {Date} now
 * @return {number}
 */
export const hoursTillCommute = (commuteTime, now) => {
    const hoursNow = now.getHours();
    if (hoursNow < commuteTime) {
        return commuteTime - hoursNow;
    }
    return commuteTime + 24 - hoursNow;
}

/**
 * Determines if the weather meets the user preferences for biking
 * @return {boolean}
 */
export const youShouldBikeToday = ({weather, morningCommute, temperatureRange, maxChanceOfRain }) => {
    const hourOfCommute = hoursTillCommute(morningCommute, new Date())
    const { temperature, precipProbability } = weather.hourly.data[hourOfCommute];
    if (
        temperature >= temperatureRange[0] &&
        temperature <= temperatureRange[1] &&
        precipProbability * 100 <= maxChanceOfRain
    ) {
        return true
    }
    return false
}


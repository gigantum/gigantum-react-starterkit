
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
 * @param {object} weatherData - from dark sky api
 * @param {{tempRange: array, maxChanceOfRain: number}} userPreferences
 * @return {boolean}
 */
export const youShouldBikeToday = (weatherData, { morningCommute, tempRange, maxChanceOfRain }) => {
    const hourOfCommute = hoursTillCommute(morningCommute, new Date())
    const { temperature, precipProbability } = weatherData.hourly[hourOfCommute];
    if (
        temperature >= tempRange[0] &&
        temperature <= tempRange[1] &&
        precipProbability <= maxChanceOfRain
    ) {
        return true
    }
    return false
}


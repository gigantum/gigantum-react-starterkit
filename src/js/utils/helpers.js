
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

export const commuteWeather = (weather, commuteHour) => {
    const hourOfCommute = hoursTillCommute(commuteHour, new Date())
    return weather.hourly.data[hourOfCommute]
}

/**
 * Determines if the weather meets the user preferences for biking
 * @return {boolean}
 */
export const youShouldBikeToday = ({weather, morningCommute, eveningCommute, temperatureRange, maxChanceOfRain }) => {
    const youShouldBikeIn = ({ temperature, precipProbability }, temperatureRange, maxChanceOfRain) => {
        if (
            temperature >= temperatureRange[0] &&
            temperature <= temperatureRange[1] &&
            precipProbability * 100 <= maxChanceOfRain
        ) {
            return true
        }
        return false
    }

    const today = new Date();
    const hourOfMorningCommute = hoursTillCommute(morningCommute, today)
    const hourOfEveningCommute = hoursTillCommute(eveningCommute, today)
    const morningWeather = weather.hourly.data[hourOfMorningCommute];
    const eveningWeather = weather.hourly.data[hourOfEveningCommute];

    return youShouldBikeIn(morningWeather, temperatureRange, maxChanceOfRain) && youShouldBikeIn(eveningWeather, temperatureRange, maxChanceOfRain); 
}


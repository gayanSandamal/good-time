// GOOD TIME!
// good-time.js by Gayan Sandamal
// LinkedIn - https://www.linkedin.com/in/gayan-sandamal/

// get the difference between two standard times
export function goodTimeDiff(settings) {
    let now = new Date()
    let start = (settings.from !== undefined) ? settings.from : now
    let end = (settings.to !== undefined) ? new Date(settings.to) : undefined
    let diff

    // check for prefixes and suffixes
    let prefix = (settings.prefix !== undefined) ? settings.prefix : undefined
    let suffix = (settings.suffix !== undefined) ? settings.suffix : undefined

    let timeDiff = Math.abs(start - end)
    let diffSeconds = Math.ceil(timeDiff / (1000))
    let diffMinutes = Math.ceil(timeDiff / (1000 * 60))
    let diffHours = Math.ceil(timeDiff / (1000 * 3600))
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
    if (diffSeconds < 60) {
        diff = diffSeconds < 10 ? ' just now' : diffSeconds + ' seconds'
        if (prefix !== undefined) {
            diff = prefix + ' ' + diff
        }
        if (suffix !== undefined) {
            diff = diff + ' ' + suffix
        }
    } else if (diffSeconds < (60 * 60)) {
        diff = diffMinutes > 1 ? diffMinutes + ' minutes' : diffMinutes + ' minute'
        if (prefix !== undefined) {
            diff = prefix + ' ' + diff
        }
        if (suffix !== undefined) {
            diff = diff + ' ' + suffix
        }
    } else if (diffSeconds < (60 * 60 * 60)) {
        diff = diffHours > 1 ? diffHours + ' hours' : diffHours + ' hour'
        if (prefix !== undefined) {
            diff = prefix + ' ' + diff
        }
        if (suffix !== undefined) {
            diff = diff + ' ' + suffix
        }
    } else if (diffSeconds < (60 * 60 * 60) * 24) {
        diff = diffDays > 1 ? diffDays + ' days' : diffDays + ' day'
        if (prefix !== undefined) {
            diff = prefix + ' ' + diff
        }
        if (suffix !== undefined) {
            diff = diff + ' ' + suffix
        }
    } else {
        diff = end.getFullYear() + '-' + end.getMonth() + '-' + end.getDate() + ' at ' + end.getHours() + ':' + end.getMinutes()
        if (prefix !== undefined) {
            diff = prefix + ' on ' + diff
        }
    }

    return diff
}
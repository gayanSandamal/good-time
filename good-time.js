// GOOD TIME!
// good-time.js by Gayan Sandamal
// LinkedIn - https://www.linkedin.com/in/gayan-sandamal/

// get the difference between two standard times 
export function goodTimeDiff(settings) {
    let now = new Date()
    let start = (settings.from !== undefined) ? settings.from : now
    let end = (settings.to !== undefined) ? new Date(settings.to) : undefined
    let diff

    let timeDiff = Math.abs(start - end)
    let diffSeconds = Math.ceil(timeDiff / (1000))
    let diffMinutes = Math.ceil(timeDiff / (1000 * 60))
    let diffHours = Math.ceil(timeDiff / (1000 * 3600))
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
    if (diffSeconds < 60e0) {
        if (diffSeconds < 10) {
            diff = ' just now'
        } else {
            diff = diffSeconds + ' seconds ago'
        }
    } else if (diffSeconds < 60e2) {
        diff = diffMinutes + ' minutes ago'
    } else if (diffSeconds < 60e3) {
        diff = diffHours + ' hours ago'
    } else if (diffSeconds < 60e3 * 24) {
        diff = diffDays + ' days ago'
    } else {
        diff = 'on ' + end.getFullYear() + '-' + end.getMonth() + '-' + end.getDate() + ' at ' + end.getHours() + ':' + end.getMinutes()
    }

    return diff
}
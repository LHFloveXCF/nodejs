// 自定义日期格式转换函数
function formatDate(dateStr) {
    let str = new Date(dateStr)
    let year = str.getFullYear()
    let month = padZero(str.getMonth() + 1)
    let day = padZero(str.getDate())

    let hour = padZero(str.getHours())
    let minutes = padZero(str.getMinutes())
    let seconds = padZero(str.getSeconds())

    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
}

// 补零韩式
function padZero(value) {
    return value <= 9 ? '0' + value : value
}

module.exports = {
    formatDate
}
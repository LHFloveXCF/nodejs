const dateFormat = require('./src/dateFormat')
const htmlEscape = require('./src/htmEscape')

module.exports = {
    // ES6语法，通过...可以将对象的属性全部展开
    ...dateFormat,
    ...htmlEscape
}
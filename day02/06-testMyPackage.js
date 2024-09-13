const mypackage = require('../mypakage')

console.log(mypackage.formatDate(new Date()));

let str = '<h1 title="abc">这是个标签<span>123&nbsp;</span></h1>'

console.log(mypackage.htmlEscape(str));


let str2 = '&lth1 title=&quotabc&quot&gt这是个标签&ltspan&gt123&ampnbsp;&lt/span&gt&lt/h1&gt'
console.log(mypackage.htmlUnEscape(str2));

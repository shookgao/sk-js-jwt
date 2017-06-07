const jwt = require('../index')

x = jwt.sign('huangxingsi',{iss:'gaobin',name:'gaobin',role:'admin'})

// console.log(x)

y = jwt.verify(x,'huangxingsi')

console.log(y)
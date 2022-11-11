const CatImage = require('../src/cats')

async function b() {
    let cat = new Cat()
    cat.says = 'Im so sorry'
    cat.tag = 'big-eyes'
    cat.type = 'd'
    cat.gif = true
    cat.filter = 'sepia'
    a = await cat.getCat()
    console.log(a)
}
b()
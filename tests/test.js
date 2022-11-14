const { CatImage } = require('../src/minusJS')

async function b() {
    let cat = new CatImage()
    cat.says = 'Im so sorry'
    cat.tag = 'big-eyes'
    cat.type = 'd'
    cat.gif = true
    cat.filter = 'sepia'
    a = await cat.getCat()
    console.log(a)
}
b()
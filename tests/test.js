const { CatImage } = require('../src/minusJS')

async function b() {
    let cat = new CatImage()
    cat.says = 'Diabetes sucks'
    cat.tag = 'cute'
    cat.type = 'square'
    cat.gif = false

    a = await cat.getCat()
    console.log(a)
}
b()

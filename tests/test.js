const { CatImage, Leveling, Warnings } = require('../src/minusJS')

async function createCat() {
    let cat = new CatImage()
    cat.tag = 'angry'
    cat.says = 'I am against Human Rights'
    cat.gif = false
    cat.type = "large"
    console.log(await cat.getCat())
}

async function createLeveling() {
    let leveling = new Leveling(0, 100, 1, 1, 1, 1.2)
    await leveling.checkData(1, 1)
    console.log(await leveling.getUserLevel(1, 1))
}
createLeveling()
createCat()
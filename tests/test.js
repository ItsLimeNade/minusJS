const { CatImage, Leveling } = require('../src/minusJS')

async function createCat() {
    let cat = new CatImage()
    cat.tag = 'cute'
    cat.says = 'I am against Human Rights'
    cat.gif = true
    cat.type = "small"
    console.log(await cat.getCat())
}

async function createLeveling() {
    let leveling = new Leveling(0, 100, 1, 1, 1, 1.2)
    await leveling.checkData(1, 1)
    console.log(await leveling.getUserLevel(1, 1))
}
createLeveling()
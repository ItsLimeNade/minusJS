const { QuickDB } = require('quick.db');

let db = undefined

class Leveling {
    constructor(startingLevel, startingXP, neededXP, growthRate) {
        this.startingLevel = startingLevel
        this.startingXP = startingXP
        this.neededXP = neededXP
        this.growthRate = growthRate
    }
    async createDB(name, path) {
        try { db = new QuickDB({ filePath: `${path}/${name}.sqlite` }) }
        catch {
            try { db = new QuickDB({ filePath: `${path}${name}.sqlite` }) }
            catch (e) { console.error("The given path contains an error: Example path : src/databases \n\n", e) }
        }
    }
    async updateData(userId, guildId, database) {
        if (!guildId) return console.error(new Error('No Guild ID was provided!'))
        if (!userId) return console.error(new Error("No User ID was provided!"))
        if (!database) return console.error(new Error("No DataBase was proided"))
        if (db.length > 0) {

        } else {
            console.error(new Error('No database is set, try using : Leveling.createDB()'))
        }
    }
}

module.exports = Leveling

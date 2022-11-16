const axios = require('axios')

class CatImage {
    constructor(tag, says, gif, filter, type) {
        this.tag = tag
        this.says = says
        this.gif = gif
        this.filter = filter
        this.type = type
    }
    async getCat() {
        const all_tags = await axios.get('https://cataas.com/api/tags').then((res) => {
            return res.data
        })
        const gif = this.gif ? '/gif' : ''
        const says = this.says ? `/says/${this.says}` : ''
        const type = this.type ? `?type=${this.type}` : '?type=sus'
        const filter = this.filter ? `filter=${this.filter}` : 'filter=none'
        let tag = this.tag ? `/${this.tag}` : ''
        if (!all_tags.includes(tag.split('/')[0])) { tag = '/cute' }
        const url = gif ? `https://cataas.com/cat${gif}${says}${type}&${filter}&json=true` : `https://cataas.com/cat${tag}${says}${type}&${filter}&json=true`
        console.log(url)
        const a = axios.get(url).then((res) => {
            return `https://cataas.com${res.data.url}`
        })

        return a
    }
}

module.exports = CatImage
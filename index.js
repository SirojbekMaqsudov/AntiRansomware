const glob = require('glob')
const fs = require('fs')

glob('/**/*.jhgn').then(files => {
    for (let file of files) {
        const original = file.split('.jhgn')[0]
        fs.rename(file, original, err => {
            if (err) {
                console.log(err + '')
                return;
            }

            console.log(`Successfully renamed!`)
        })
    }
})
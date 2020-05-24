const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, "../data/productsDataBase.json")

let productData = {

    findAll: () => {
        if(!fs.existsSync(filePath)){
            fs.writeFileSync(filePath, "")
        }
        let json = fs.readFileSync(filePath, 'utf8')
        let product = json.length == 0? [] : JSON.parse(json)
        return product
    },

    create: (produt) => {
        let arrayProducts = this.findAll()
        product.id = this.lastId()

        arrayProducts.push(product)

        let jsonData = JSON.stringify(arrayProducts, null, "")

        fs.writeFile(filePath, jsonData)
    },

    lastId: () => {
        let arrayProducts = this.findAll();

        let lastId = 0;
        for(product of arrayProducts){
            if (lastId < arrayProducts.id) { lastId = arrayProducts.id}
        }
        return lastId +1;
    }

}

module.exports = productData
const fs = require('fs')

const writeFile = (path, products)=>{
    fs.promises.writeFile(path, JSON.stringify({products: products}))
}

class ProductAssetsManager{
    constructor(path){
        this.path = path;
    }
    createFile = async ()=>{
        await writeFile(this.path, this.product)
    }
}

const productAssets = new ProductAssetsManager('./assets/product.json')
module.exports = productAssets


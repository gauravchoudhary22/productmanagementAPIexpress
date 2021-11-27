const express = require("express")
const router = express.Router();
const fs = require('fs');

const dataPath = './product.json' ;
const companyDataPath = './company.json';
const sellerDataPath = './seller.json';

// -------------------PRODUCTS-----------------------------------

const saveProductData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}

const getProductData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}


// reading the data
router.get('/product', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  //add new product
  router.post('/product', (req, res) => {
   
    var existProducts = getProductData()   
    existProducts.push(req.body)
    console.log(existProducts);
    saveProductData(existProducts);
    res.send({success: true, msg: 'product data added successfully'})
})


// Update - using Put method
router.put('/product/:id', (req, res) => {
    var existProducts = getProductData()
    fs.readFile(dataPath, 'utf8', (err, data) => {
     const Id = req.params['id'];
     
     let obj = existProducts.find((o, i) => {
        if (o.product_id == Id) {
            existProducts[i] = req.body;
            return true; 
        }
    });

     saveProductData(existProducts);
     obj ? res.send(`products with id ${Id} has been updated`): res.send('No such data was found')
   }, true);
 });

 router.delete('/product/:id', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
     var existProducts = getProductData()
 
     const Id = req.params['id'];
    let product = existProducts.find((o, i) => {
        if (o.product_id == Id) {
            existProducts.splice(i,1)  
            return true; // stop searching
        }
    });
     console.log(existProducts)
     saveProductData(existProducts);
     product ? res.send(`Products with id ${Id} has been deleted`):res.send("no such id found");
   }, true);
 })

 // --------------------- COMPANY---------------------------

 const saveCompanyData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(companyDataPath, stringifyData)
}

const getCompanyData = () => {
    const jsonData = fs.readFileSync(companyDataPath)
    return JSON.parse(jsonData)    
}


// reading the data
router.get('/company', (req, res) => {
    fs.readFile(companyDataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  //add new product
  router.post('/company', (req, res) => {
   
    var existCompany = getCompanyData()   
    existCompany.push(req.body)
    console.log(existCompany);
    saveCompanyData(existCompany);
    res.send({success: true, msg: 'Company data added successfully'})
})


// Update - using Put method
router.put('/company/:id', (req, res) => {
    var existCompany = getCompanyData()
    fs.readFile(companyDataPath, 'utf8', (err, data) => {
     const Id = req.params['id'];
     
     let obj = existCompany.find((o, i) => {
        if (o.company_id == Id) {
            existCompany[i] = req.body;
            return true; 
        }
    });

     saveCompanyData(existCompany);
     obj ? res.send(`Company with id ${Id} has been updated`): res.send('No such data was found')
   }, true);
 });

 router.delete('/company/:id', (req, res) => {
    fs.readFile(companyDataPath, 'utf8', (err, data) => {
     var existCompany = getCompanyData()
 
     const Id = req.params['id'];
    let company = existCompany.find((o, i) => {
        if (o.company_id == Id) {
            existCompany.splice(i,1)  
            return true; // stop searching
        }
    });
     console.log(existCompany)
     saveCompanyData(existCompany);
     company ? res.send(`Company with id ${Id} has been deleted`):res.send("no such id found");
   }, true);
 })




 // --------------------- SELLER ---------------------------

 const saveSellerData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(sellerDataPath, stringifyData)
}

const getSellerData = () => {
    const jsonData = fs.readFileSync(sellerDataPath)
    return JSON.parse(jsonData)    
}


// reading the data
router.get('/seller', (req, res) => {
    fs.readFile(sellerDataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  //add new product
  router.post('/seller', (req, res) => {
   
    var existSeller = getSellerData()   
    existSeller.push(req.body)
    console.log(existSeller);
    saveSellerData(existSeller);
    res.send({success: true, msg: 'Seller data added successfully'})
})


// Update - using Put method
router.put('/seller/:id', (req, res) => {
    var existSeller = getSellerData()
    fs.readFile(sellerDataPath, 'utf8', (err, data) => {
     const Id = req.params['id'];
     
     let obj = existSeller.find((o, i) => {
        if (o.seller_id == Id) {
            existSeller[i] = req.body;
            return true; 
        }
    });

     saveSellerData(existSeller);
     obj ? res.send(`Seller with id ${Id} has been updated`): res.send('No such data was found')
   }, true);
 });

 router.delete('/seller/:id', (req, res) => {
    fs.readFile(sellerDataPath, 'utf8', (err, data) => {
     var existSeller = getSellerData()
 
     const Id = req.params['id'];
    let seller = existSeller.find((o, i) => {
        if (o.seller_id == Id) {
            existSeller.splice(i,1)  
            return true; // stop searching
        }
    });
     console.log(existSeller)
     saveSellerData(existSeller);
     seller ? res.send(`Seller with id ${Id} has been deleted`):res.send("no such id found");
   }, true);
 })


module.exports = router;
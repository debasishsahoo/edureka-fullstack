db.products.find({
    price: {
        $not: { $gt: 699 }
    }
})

db.products.find({
    price: {
        $lte: 699
    }
})
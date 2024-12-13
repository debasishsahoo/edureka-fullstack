db.sales.insertMany([
    { "_id": 1, "item": "Americanos", "price": 5, "size": "Short", "quantity": 22, "date": ISODate("2022-01-15T08:00:00Z") },
    { "_id": 2, "item": "Cappuccino", "price": 6, "size": "Short", "quantity": 12, "date": ISODate("2022-01-16T09:00:00Z") },
    { "_id": 3, "item": "Lattes", "price": 15, "size": "Grande", "quantity": 25, "date": ISODate("2022-01-16T09:05:00Z") },
    { "_id": 4, "item": "Mochas", "price": 25, "size": "Tall", "quantity": 11, "date": ISODate("2022-02-17T08:00:00Z") },
    { "_id": 5, "item": "Americanos", "price": 10, "size": "Grande", "quantity": 12, "date": ISODate("2022-02-18T21:06:00Z") },
    { "_id": 6, "item": "Cappuccino", "price": 7, "size": "Tall", "quantity": 20, "date": ISODate("2022-02-20T10:07:00Z") },
    { "_id": 7, "item": "Lattes", "price": 25, "size": "Tall", "quantity": 30, "date": ISODate("2022-02-21T10:08:00Z") },
    { "_id": 8, "item": "Americanos", "price": 10, "size": "Grande", "quantity": 21, "date": ISODate("2022-02-22T14:09:00Z") },
    { "_id": 9, "item": "Cappuccino", "price": 10, "size": "Grande", "quantity": 17, "date": ISODate("2022-02-23T14:09:00Z") },
    { "_id": 10, "item": "Americanos", "price": 8, "size": "Tall", "quantity": 15, "date": ISODate("2022-02-25T14:09:00Z") }
]);

db.sales.aggregate([{
    $group: {
        _id: 'null',
        totalQty: { $sum: '$quantity' }
    }
}])



db.sales.aggregate([{
    $group: {
        _id: 'null',
        totalQty: { $sum: '$quantity' }
    }
}, { $project: { _id: 0 } }])


db.sales.aggregate([{
    $group: {
        _id: '$item',
        totalQty: { $sum: '$quantity' }
    }
}])


db.sales.aggregate([{
    $group: {
        _id: '$item',
        totalQty: { $sum: '$quantity' }
    }
}, { $sort: { totalQty: 1 } }])




db.sales.aggregate([{
    $group: {
        _id: '$item',
        totalQty: { $sum: '$quantity' }
    }
},
{ $match: { totalQty: { $gt: 30 } } },
{ $sort: { totalQty: 1 } }
])



db.sales.aggregate([{
    $group: {
        _id: '$size',
        totalAmt: { $sum: { $multiply: ["$price", '$quantity'] } }
    }
},
{ $sort: { totalAmt: 1 } }
])


db.sales.aggregate([{
    $group: {
        _id: '$size',
        totalAmt: { $sum: { $multiply: ["$price", '$quantity'] } }
    }
},
{ $match: { totalAmt: { $gt: 500 } } },
{ $sort: { totalAmt: 1 } }
])























db.products.insertMany([
    {
        _id: 1,
        name: "xPhone",
        price: 799,
        releaseDate: ISODate("2011-05-14"),
        spec: { ram: 4, screen: 6.5, cpu: 2.66 },
        color: ["white", "black"],
        storage: [64, 128, 256],
    },
    {
        _id: 2,
        name: "xTablet",
        price: 899,
        releaseDate: ISODate("2011-09-01"),
        spec: { ram: 16, screen: 9.5, cpu: 3.66 },
        color: ["white", "black", "purple"],
        storage: [128, 256, 512],
    },
    {
        _id: 3,
        name: "SmartTablet",
        price: 899,
        releaseDate: ISODate("2015-01-14"),
        spec: { ram: 12, screen: 9.7, cpu: 3.66 },
        color: ["blue"],
        storage: [16, 64, 128],
    },
    {
        _id: 4,
        name: "SmartPad",
        price: 699,
        releaseDate: ISODate("2020-05-14"),
        spec: { ram: 8, screen: 9.7, cpu: 1.66 },
        color: ["white", "orange", "gold", "gray"],
        storage: [128, 256, 1024],
    },
    {
        _id: 5,
        name: "SmartPhone",
        price: 599,
        releaseDate: ISODate("2022-09-14"),
        spec: { ram: 4, screen: 5.7, cpu: 1.66 },
        color: ["white", "orange", "gold", "gray"],
        storage: [128, 256],
    },
]);

//Remove Field from Document
db.products.updateOne({_id:1},{$unset:{price:''}}) //Remove One Field
db.products.updateMany({},{$unset:{'spec.ram':''}}}) //Remove Embeded Field
db.products.updateMany({},{$unset:{'storage.0':''}}}) //Remove Array Field
db.products.updateMany({},{$unset:{'spec':'',releaseDate:''}}}) 




db.products.find({})
   .projection({})
   .sort({})
   .limit(0)
   

   
   
   
   
   
   
const fins = db.produtos.find().count();

db.resumoProdutos.insertOne({ franquia: "McDonalds",
 totalProdutos: fins });

db.resumoProdutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 });
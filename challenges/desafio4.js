db.produtos.find({ vendidos: { $gte: 50, $lte: 100 } },
     { _id: 0, vendidos: 1, nome: 1 }).sort({ vendidos: 1 });
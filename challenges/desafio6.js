db.produtos.find({ curtidas: { $gte: 10, $lte: 100 } },
    { _id: 0, curtidas: 1, nome: 1 });
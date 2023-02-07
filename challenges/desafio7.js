db.produtos.find({ $nor: [
    { vendidos: { $eq: 50 } },
    { tags: { $exists: true } },
  ] },
  { _id: 0, vendidos: 1, nome: 1 });

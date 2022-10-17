db.produtos.find({ $and: [{ "valoresNutricionais.tipo": "calorias" },
 { "valoresNutricionais.quantidade": { $lt: 500 } }] },
 { _id: 0, nome: 1 });
db.produtos.updateOne({ nome: "Big Mac" }, [{ $set: { ultimaModificacao: "$$NOW" } }]);
db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });
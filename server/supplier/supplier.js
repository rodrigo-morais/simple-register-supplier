Meteor.methods({
  addSupplier: function (name) {

    Suppliers.insert({
        name: name,
        createdAt: new Date()
      });
  },
  deleteSupplier: function(supplierId){
    Suppliers.remove(supplierId);
  }
});
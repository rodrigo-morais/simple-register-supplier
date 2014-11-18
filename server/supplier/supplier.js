Meteor.methods({
  addSupplier: function (name) {

    Suppliers.insert({
        name: name,
        createdAt: new Date()
      });
    console.log(name);
  }
});
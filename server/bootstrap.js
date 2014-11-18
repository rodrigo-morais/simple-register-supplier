// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Suppliers.find().count() === 0) {
    var data = [
      {name: "Supplier 1"},
      {name: "Supplier 2"},
      {name: "Supplier 3"}
    ];

    var timestamp = (new Date()).getTime();
    _.each(data, function(supplier) {
      var supplier_id = Suppliers.insert({name: supplier.name,
                                          createdAt: new Date(timestamp)});
        timestamp += 1; // ensure unique timestamp.
    });
  }
});
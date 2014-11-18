Template.suppliersNew.events({
    "submit .new-supplier": function (event) {
      var text = event.target.text.value;

      Meteor.call("addSupplier", text);

      Router.go('/home');

      return false;
    },
});
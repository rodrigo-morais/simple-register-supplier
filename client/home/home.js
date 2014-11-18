Meteor.subscribe("suppliers");
Template.home.helpers({
  suppliers: function () {
    return Suppliers.find({}, {sort: {createdAt: -1}});
  },
  incompleteCount: function () {
      return Suppliers.find({}).count();
    }
});
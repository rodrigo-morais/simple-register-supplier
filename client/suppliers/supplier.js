Template.supplier.events({
    "click .delete": function(){
        Meteor.call("deleteSupplier", this._id);
    }
});
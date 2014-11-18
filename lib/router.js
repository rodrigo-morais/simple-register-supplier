Router.configure({
  layoutTemplate: 'appLayout',

  notFoundTemplate: 'appNotFound',

  loadingTemplate: 'appLoading',
/*
  waitOn: function() {
    return [
      Meteor.subscribe('publicLists'),
      Meteor.subscribe('privateLists')
    ];
  }*/
});

dataReadyHold = null;

if (Meteor.isClient) {
/*  dataReadyHold = LaunchScreen.hold();

  Router.onBeforeAction('loading', {except: ['join', 'signin']});
  Router.onBeforeAction('dataNotFound', {except: ['join', 'signin']});*/
}

Router.map(function() {
  this.route('root', {
    path: '/',
    action: function() {
      this.render();
    }
  });
  
  this.route('home', {
    path: '/home',
    action: function() {
      this.render();
    }
  });

  this.route('suppliers.new', {
    path: '/suppliers/new',
    action: function() {
      this.render();
    }
  });

  
});
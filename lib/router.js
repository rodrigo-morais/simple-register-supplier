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
  this.route('home', {
    path: ['/', '/home'],
    action: function() {
      this.render();
    }
  });
});
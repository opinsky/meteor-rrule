Package.describe({
  summary: "RRule recurrency calculator package for Meteor"
});

Package.on_use(function(api, where) {
  api.use(['templating'], 'client');
  api.add_files(['lib/rrule.js'], 'client');
});

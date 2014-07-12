Package.describe({
  summary: 'Adds an unset method to Session'
});

Package.on_use(function(api) {
  api.use('session');
  api.add_files('unset.js', 'client');
});

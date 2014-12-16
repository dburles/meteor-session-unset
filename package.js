Package.describe({
  name: 'dburles:session-unset',
  summary: 'Adds an unset method to Session',
  version: '1.0.0',
  git: 'https://github.com/dburles/meteor-session-unset.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('session');
  api.addFiles('unset.js', 'client');
});

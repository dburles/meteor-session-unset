meteor-session-unset
====================
Adds a a simple `unset` method to Session.

```js
Session.set('foo', 'bar');
Session.get('foo'); // => "bar"
Session.unset('foo');
Session.get('foo'); // => undefined
```

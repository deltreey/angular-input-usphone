angular-input-usphone
=====

Add this attribute to your input element to make it display as a phone number.

It's a simple angularjs directive that changes the way an input looks without changing the value that angular sees for it.  It restricts the user to type only numeric characters and adds parenthesis and hyphens to the number.

Because it's such a small amount of code, it should be able to read and understand so you can even tweak it for your needs.  In fact, I encourage it!

Available on Bower
-----

`bower install angular-input-usphone`

How To
-----
Simply include the input-usphone module

```javascript
var app = angular.module('app', [ 'input-usphone' ]);
```

Then use the usd attribute on input fields in your html

```html
<input type="text" phone ng-model="number" />
```

Note that the input type must be `text` in order for angular to allow it to watch where your cursor is and not reset where your typing after each character.  `ng-model` is required.

This was designed for simplicity.  If you want something with more features (and the complexity that comes with that) check out: [international-phone-number](https://github.com/mareczek/international-phone-number)

That's it!

Check out the github pages example here: http://deltreey.github.io/angular-input-usphone/

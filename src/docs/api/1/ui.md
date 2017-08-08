# UI

User interface helper functions for convenience.

Name space: `io3d.ui`

## signUp

Brings up signup dialogue:
```javascript
io3d.ui.signUp()
```

<img style="max-width:500px;" src="https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-08_14-52-32_hTTo66/https___3d_io_signup_.jpg"/>

Simple usage in HTML links:
```html
<a href="javascript:io3d.ui.signUp();">Sign Up</a>
```

Returns a promise for chainability:
```javascript
io3d.ui.signUp().then(function onSuccess (session){
  io3d.ui.message.success('Welcome '+session.user.username)
}, onFail(error) {
  io3d.ui.message.error(error)
})
```

## logIn

Shows login dialogue:
```javascript
io3d.ui.logIn()
```

<img style="max-width:500px;" src="https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-08_14-48-24_KFj4Lp/https___3d_io_login_.jpg"/>

Simple usage in HTML links:
```html
<a href="javascript:io3d.ui.logIn();">Log In</a>
```

Show login dialogue with predefined values:
```javascript
io3d.ui.logIn({ username: 'Foo', password: 'Bar' })
// embedding passwords in code is not such a good idea though...
```

Returns a promise for chainability:
```javascript
io3d.ui.logIn().then(function onSuccess (session){
  io3d.ui.message.success('Hello '+session.user.username)
}, onFail(error) {
  io3d.ui.message.error(error)
})
```

## devDashboard

Shows dev dashboard allowing user to view and set up secret key and publishable keys
```javascript
io3d.ui.devDashboard()
```

<img style="max-width:500px;" src="https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-08_14-59-55_xYJsYv/dev-dashboard.jpg"/>

Simple usage in HTML links:
```html
<a href="javascript:io3d.ui.devDashboard();">Dev Dashboard</a>
```

## logOut

Log out current user:
```javascript
io3d.ui.logOut()
```

Simple usage in HTML links:
```html
<a href="javascript:io3d.ui.logOut();">Log Out</a>
```

## requestPasswordReset

Shows a dialogue allowing the user to request a password reset link via email. 
```javascript
io3d.ui.requestPasswordReset()
```

Simple usage in HTML links:
```html
<a href="javascript:io3d.ui.requestPasswordReset();">Reset Password</a>
```

## message

Generic purpose messages attached to the top of the screen. 

### Message

Shows a simple message to the user:
```javascript
io3d.ui.message('Hello World')
```

You can also pass HTML elements as argument:
```javascript
var el = document.createElement('button')
el.innerHTML = 'Click Me!'
io3d.ui.message(el)
```

### Colors

<img style="max-width:500px;" src="https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-08_14-57-42_GyQCCi/https___3d_io_messages.jpg"/>

You may apply colors to indicate success or error:
```javascript
// neutral color:
io3d.ui.message('Whatever')
// in satisfiying  green
io3d.ui.message.success("It's 5pm!")
// in cautious yellow:
io3d.ui.message.warning('Ups :/ ')
// in dangerous red:
io3d.ui.message.error('Run Forrest, run!')
```

### Expiration

Make message desapear after 1 second: (default is 4 seconds)
```javascript
io3d.ui.message('Hello', { expire: 1000 })
```

Message remains on screen and returns a promise:
```javascript
var myMessage = io3d.ui.message('Here to stay.', { expire: 0 })
// We will make our message go away manually:
setTimeout(function(){
  myMessage.close()
}, 3000)
// myMessage can be used as a promise which gets resolved after message closes
myMessage.then(function() {
  // create another message
  io3d.ui.message('Here is a new message')
})
```

## confirm

Similar to window.confirm() just asynchronous and more beautiful. Returns a promise.

<img style="max-width:500px;" src="https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-08_15-01-50_p0ztHI/confirm.jpg"/>

```javascript
io3d.ui.confirm('Do you like ice cream?').then(function onConfirm(){
  return io3d.ui.alert('Me too :)')
}, onCancel() {
  return io3d.ui.confirm('Can I have yours then?')
})
```

Extended functionality with title (large font) and HTML elements in message:

<img style="max-width:500px;" src="https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-08_15-08-22_GjHweB/confirm-extended.jpg"/>

```javascript
var el = document.createElement('button')
el.innerHTML = 'Click Me!'

io3d.ui.confirm({ title:'Please help this button:', message:el })
```

## alert

Similar to window.alert() just asynchronous and more beautiful. Returns a promise.
```javascript
io3d.ui.alert('Hello World')
// returns a promise:
io3d.ui.alert('Hello World').then(doSomethingElse)
```

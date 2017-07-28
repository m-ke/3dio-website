# Authentication

## Log in

API Key: **not required**

With this API key you can create a session that can be used to obtain user information, such as the list of scenes of a user's organisation.

```javascript
  IO3D.auth.logIn({
    name: 'demo@example.org',
    password: 'mypassword'
  }).then(console.log)
```

**Note**: All parameters are properties in a single object (see example above).

| Parameter | Required? | Description |
| --- | --- | --- |
| `name` | Yes | Either the email or username of the user to be logged in |
| `password` | Yes | The password of the user |

## Log out

API Key: **not required**

This API call invalidates and ends a user session. After making this call you can no longer access data from the user or their organisation.

```javascript
  IO3D.auth.logOut().then(console.log)
```

## Get session information

API Key: **not required**

This API call returns an object that indicates if the user is logged in and has a valid session.
The response also contains the user session information if the `isAuthenticated` property is true or an empty session object if it is false.

```javascript
  IO3D.auth.getSession().then(console.log)
```
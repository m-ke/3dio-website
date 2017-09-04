# Presenting an Office Space Interactively

<!-- We are working using the app with the shortener fQcn7u -->
<p>
In this example we are walking through all the steps to get from a 2D floor plan to an interactive presentation of an office space. First, here's the result:

<!-- Reference the app as an iframe -->
<iframe style="width:100%; height:400px" src="https://app.3d.io/fQcn7u"></iframe>
<br>
<br>
[Go to this App and remix it](https://app.3d.io/fQcn7u)
<br>
<br>
<p>Now let's go ahead and build this from scratch!

<h3> 1. Get a 3D Model from a 2D Floor Plan:</h3>
- Go to your [Archilogic Dashboard](https://spaces.archilogic.com/dashboard) and order a Basic 3D Model by uploading a 2D floor plan
- You'll receive something like this:
<br>
<a href="https://storage.3d.io/5a4fdff6-a40b-403d-817c-802305866599/2017-09-04_13-07-11_PfSVZT/basic-commercial-model.jpg">
<img style="max-width: 300px;" src="https://storage.3d.io/5a4fdff6-a40b-403d-817c-802305866599/2017-09-04_13-07-11_PfSVZT/basic-commercial-model.jpg">
</a>
<br>
- The furniture as well as the architectural items are generic - essentially a floor plan in 3D
- You can easily publish and share this model without any additional work as an iframe. See [this tutorial](https://youtu.be/kb9fuzeE9EM) for instructions.
- If you wish to customise the appearance of your model go to step 3.

<h3>2. Place furniture and/or edit architecture:</h3>
- Furniture: use the editor to delete, add, and change pieces of furniture
- Architecture: before you can edit architecture you need to turn off the realistic lighting setting. This will expose all of the architectural tools in the editor. Once you are happy with your work be sure save it and then turn on realistic lighting again

<h3>3. Customise, Publish & Share:</h3>
- Go to the [AppCreator](https://appcreator.3d.io) and select any of the templates to get started
- Click the "make a copy" icon on the top right in order to create your own app
- Give your app a title
- Reference your 3D model: copy/paste the URL of your 3D Model in the "Scene" box; the scene identifier will be automatically parsed from the string
- Start customising your model! Add a panorama, change the background color, show your logo where you'd like, add a disclaimer, and on-and-on; visit the [A-Frame Docs](https://aframe.io/docs/0.6.0/introduction/) to see what's possible!
- Share your app by copying the URL which is displayed above the model

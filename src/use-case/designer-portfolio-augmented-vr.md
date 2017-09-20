# Presenting a Residential Space Interactively

<!-- We are working using the app with the shortener o2Jx8X -->
<p>
In this example we are walking through all the steps to get from a 2D floor plan to an interactive presentation of a residential space. First, here's the result:

<!-- Reference the app as an iframe -->
<iframe style="width:100%; height:400px" src="https://app.3d.io/o2Jx8X"></iframe>
<br>
<br>
Go [fullscreen](https://app.3d.io/o2Jx8X) or [open and remix!](https://appcreator.3d.io/o2Jx8X)
<br>
<br>

<!-- Description of how to do this -->
<p>Now let's go ahead and build this from scratch!

<h3> 1. Get a 3D Model from a 2D Floor Plan:</h3>
- Go to your [Archilogic Dashboard](https://spaces.archilogic.com/dashboard) and order a Basic 3D Model by uploading a 2D floor plan or create/import your own 3d model using the [Archilogic 3D Editor](https://spaces.archilogic.com/model/template/empty)
- If you uploaded a 2D floor plan to Archilogic, you'll receive a 3D model within 24 hours which looks like this:
<br>
<a href="https://storage.3d.io/535e624259ee6b0200000484/2017-09-20_09-23-18_ky6SML/BasicModelResidential.JPG">
<img style="max-width: 300px;" src="https://storage.3d.io/535e624259ee6b0200000484/2017-09-20_09-23-18_ky6SML/BasicModelResidential.JPG">
</a>
<br>
- The furniture as well as the architectural items are generic - essentially a floor plan in 3D
- You can easily publish and share this model without any additional work as an iframe. See [this tutorial](https://docs.archilogic.com/en/tutorials/sharing-embedding/) for instructions
- If you wish to customize the appearance of your presentation but not the model itself go to step 3.

As an alternative to creating your own 3D models you can also approach one of our [Certified Partners](https://3d.io/partners.html). These models can then still be turned into custom applications in Step 3.

<h3>2. Place furniture and/or edit architecture:</h3>
- Furniture: use the editor to delete, add, and change pieces of furniture. Click [here](https://docs.archilogic.com/en/tutorials/furnishing/) to learn how to edit the furniture pieces in your model
- Architecture: before you can [edit architecture](https://docs.archilogic.com/en/tutorials/architectural-editor/) you need to turn off the realistic lighting setting. This will expose all of the architectural tools in the editor. Once you are happy with your work turn realistic lighting back on and make sure to save your model.

<h3>3. Customize, Publish & Share:</h3>
- Go to the [AppCreator](https://appcreator.3d.io) and select any of the templates to get started
- Click the "make a copy" icon on the top right in order to create your own app on the base of an existing template
- Give your app a title
- Reference your 3D model: copy/paste the URL of your Archilogic 3D Model in the "Scene" box; the scene identifier will be automatically parsed from the string
- Start customizing your model. Add a panorama, change the background color, show your logo where you'd like, add a disclaimer, and on-and-on; visit the [A-Frame Docs](https://aframe.io/docs/0.6.0/introduction/) to see what's possible. In this particular model there are a number of additional features such as the floor plan overlay. These are documented in the html code. Just 'inspect' when you have the App open in full screen or [open the app in the AppCreator](https://appcreator.3d.io/o2Jx8X?m=nve)
- Share your app with friends by copying the URL which is displayed above the model

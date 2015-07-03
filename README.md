Skyhawk Flight Instruments jQuery Plugin
===================

The Skyhawk Flight Instrument plugin is a fork of the excellent jQuery Flight Indicators Plugin (https://github.com/sebmatton/jQuery-Flight-Indicators), with several additions and updated graphics. The instruments are modelled after those typically found in a Cessna 172 Skyhawk aircraft.

This plugin allows you to display high quality flight indicators using HTML, CSS3, jQuery and SVG images. The methods make customization and real time implementation really easy. Further, since all the images are vector svg you can resize the indicators to your application without any quality loss!

Currently supported indicators are :

* Air Speed
* Attitude
* Altimeter
* Turn Coordinator
* Heading
* Vertical Speed

Examples
-------------------
Here is an example of a full dashboard:

![demo_example](https://raw.githubusercontent.com/uw-ray/Skyhawk-Flight-Instruments/master/docs/dashboard.png "Indicator examples")

The image below shows a zoomed altimeter. Vector images allows you to keep high quality render with large indicators.

![demo_highres](https://raw.githubusercontent.com/uw-ray/Skyhawk-Flight-Instruments/master/docs/zoom_example.png "High resolution indicator")

Usage
-------------------
### Initialization
To use this plugin you need to import a few files in the head of your HTML file :

```html
<script src="js/jquery-1.11.3.js"></script>
<script src="js/d3.min.js"></script>
<script src="js/jquery.flightindicators.js"></script>
<link rel="stylesheet" type="text/css" href="css/flightindicators.css" />
```

== More work to be done
![demo_highres](https://raw.githubusercontent.com/uw-ray/Skyhawk-Flight-Instruments/master/docs/move_path.png "move_path woes")

### Using the plugin
Create a `<span>` section to put an indicator in :

```html
<span id="attitude"></span>
```

Then, when the span is ready in the DOM (maybe you need to wait for document ready), you can run the indicator function :

```js
var indicator = $.flightIndicator('#attitude', type, options);
```
Where the first argument is the selector, the type value specify the indicator type and the options overwrite the default settings.

To display the most simple indicator, as for example the attitude indicator, we use :

```js
var indicator = $.flightIndicator('#attitude', 'attitude');
```

The type may be `attitude`, `heading`, `variometer`, `airspeed` or `altimeter`. If the type is not correct, the default type will be attitude.

Initial settings can be modified using the `options` parameter. Here are the valid options and the default settings :

```js
var options = {
	size : 200,				// Sets the size in pixels of the indicator (square)
	roll : 0,				// Roll angle in degrees for an attitude indicator
	pitch : 0,				// Pitch angle in degrees for an attitude indicator
	heading: 0,				// Heading angle in degrees for an heading indicator
	vario: 0,				// Variometer in 1000 feets/min for the variometer indicator
	airspeed: 0,			// Air speed in knots for an air speed indicator
	altitude: 0,			// Altitude in feets for an altimeter indicator
	pressure: 1000,			// Pressure in hPa for an altimeter indicator
	showBox : true,			// Sets if the outer squared box is visible or not (true or false)
	img_directory : 'img/'	// The directory where the images are saved to
}
```

The options parameters are optionnals.

### Updating the indicator informations
Some methods are used to update the indicators, giving the opportunity to create realtime GUI !

The way to use it is really simple.

```js
var attitude = $.flightIndicator('#attitude', 'attitude');
attitude.setRoll(30); // Sets the roll to 30 degrees
```

Here are the valid methods :

```js
indicator.setRoll(roll);			// Sets the roll of an attitude indicator
indicator.setPitch(pitch);			// Sets the pitch of an attitude indicator
indicator.setHeading(heading);		// Sets the heading of an heading indicator
indicator.setVario(vario);			// Sets the climb speed of an variometer indicator
indicator.setAirSpeed(speed);		// Sets the speed of an airspeed indicator
indicator.setAltitude(altitude);	// Sets the altitude of an altimeter indicator
indicator.setPressure(pressure);	// Sets the pressure of an altimeter indicator
indicator.resize(size);				// Sets the size of any indicators
indicator.showBox();				// Make the outer squared box of any instrument visible
indicator.hideBox();				// Make the outer squared box of any instrument invisible
```

Author and License
-----------
Authors : Raymond Blaga (raymond.blaga@gmail.com), Edward Hanna (edward.hanna@senecacollege.ca), Sébastien Matton (seb_matton@hotmail.com)

Skyhawk Flight Instruments was made for use in an online course with the purpose of training future pilots, developed by Seneca College Centre for Development of Open Technology.

The project is published under GPLv3 License. See LICENSE file for more informations

Thanks
---------
Thanks to Sébastien Matton and everyone involved in the jQuery Flight Indicators Plugin.

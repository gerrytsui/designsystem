[![Stories in Ready](https://badge.waffle.io/PBGUX/designsystem.png?label=ready&title=Ready)](https://waffle.io/PBGUX/designsystem)
PB Design System
================
Download Zip file or Git Clone.

CD into folder and run `npm install`, then `bower install`, then `grunt serve:livepreview`.

Home page of live preview should open in default browser.

Working raw files are in `/app`.

Compiled and processed files are in `/live_preview`.

The Design System CSS processed and compacted CSS file is in `/dist/styles`. To use the design system in your project, copy `design_system.css` to your project's CSS directory.  You can then create your own CSS file to hold your project's CSS and any overrides needed.



##Release Notes

###0.7 July 28, 2014

- Updates to color palette for accessibility
  - Eliminated "gray-mid" and moved some text objects, such as labels, to "gray-text".
  - New "gray" added for elements such as rules and borders
  - Revised Blue and Yellow
  - Adjusted Blues
- Added separate page with alternative Angular Bootstrap UI components.  The layout of this section is still being worked on.
- Overrode some Bootstrap colors and styles that still persisted
- Clarified Alerts pages a bit more
- Most, if not all, JS code converted to Angular JS directives


###0.6 - July 18, 2014

- Updated to use Bootstrap 3.2
- Added Kendo UI splitter
- Added range slider
- Added animated progress button
- Added thin footer and footer without social icons
- Added stacked 2-row header
- Fixes to the "user menu" at the top right
- Other menu fixes
- Fine-tuned several colors
- Added vendor.css to the DIST folder.  This compressed css file includes all the css from the various vendor add-ons used in the DS
- Fixes to state colors in toggle buttons
- Updated the angular code for the prepended checkbox
- Much cleanup done to the Live Preview

###0.5 - June 27, 2014

- Removed Font Awesome from Bower, using CDN instead.
- Alerts:
	- updated modal dialogs
	- finalized colors and layout
	- removed cancel buttons from dialogs
- Inputs
	- fixed angular toggle switches
	- prepended checkbox field
	- updated calendar picker
	- reorganized page and support text
- Icons
	- Updated page layout
- Buttons
	- Updated page layout   


###0.4 - June 17, 2014

- Colors:
	- Added extended color palette, with colors for charts
- Alerts:
    - Added modal alert boxes and dialog boxes
- Inputs:
	- made clear prepended and appended icons the default
	- changed button type in prepend/append to primary
	- Added **Select2** menu and multi-picker
- Icons: 
	- organized FA icons by type 
	- added "pb-folder-add" icon
- Added **Isotope** image gallery
- Cleaned up home page and used chart colors for charts

###0.3 - May 29, 2014

- Inputs:
  - removed inner shadows
  - added date/time picker
  - fixed error color
  - added Multi-select with checkboxes
  - added "clear" prepended and appended form fields
  - added small and large field sizes
  - added link to the page for the date/time picker plugin docs
- Alerts
	- normalized color palette
	- added simple contextual color backgrounds
	- added disconnected transitory alert (more options coming)
- Tables
	- added "extra compressed" variant
- Text
	- added contextual colors
- Accordions
  	- replaced Angular accordion with simple Bootstrap one
  	- added "compact" variant with no space between
  	- added a simple collapsing div
  	- separated tabs onto their own page
- Tabs
   - switched to Bootstrap tabs
   - added better vertical variant



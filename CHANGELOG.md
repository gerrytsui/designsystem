


##Release Notes

###0.9.0
- Pulled out live preview to put it its own repo
- Refactor sass into different structure
- Switched to Gulp from Grunt

###0.8.8  September 23, 2014
- Refactored Sass into separate files using manifest files.  Will be easier to locate specific sass for a page
- Updates and improvements to gruntfile
- Updated bower and npm packages to latest versions
- Updated Angular to 1.2.23
- Fixed Kendo UI colors to match design system
- Fixed Kendo splitter to no longer require image files
- Styling and changes to Miller Columns
- Split controllers for elements into separate controllers
- Select2 Menu deprecated and removed; now using Selectize menu
- Fixes to angular toggle switch
- Reversed show/hide password in control
- Text color slightly darker

###0.85 August 12, 2014
- Separated Kendo UI and UI-Bootstrap into their own CSS files
- Fixed Knockout button bug

###0.8 August 11, 2014
- Fixes to Colors page, added sample charts in all colors

###0.75 August 5, 2014
- Converted project to use SASS instead of LESS.  Updated Gruntfile to compile SASS files, removed LESS code.  Please be sure to run npm install if downloading entire package.
- This **does not affect** the CSS file in /dist
- Made some other fixes to clean up paths

###0.73 July 29,2014
- Fixed styling buf on home page of live preview
- updated Grunt serve command to inject css on recompile rather than force a reload.  Finally.

###0.72 July 29, 2014

- Updates to fix a couple of styling bugs introduced when changing the Gray color.

###0.71 July 28,2014

- Small update to fix the CSS file from Bootstrap UI not being compiled into vendor.css

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

PB Design System
================
Download Zip file or Git Clone.

CD into folder and run `npm install`, then `bower install`, then `grunt serve:livepreview`.

Home page of live preview should open in default browser.

Working raw files are in `/app`.

Compiled and processed files are in `/live_preview`.

The Design System CSS processed and compacted CSS file is in `/dist/styles`. To use the design system in your project, copy `design_system.css` to your project's CSS directory.  You can then create your own CSS file to hold your project's CSS and any overrides needed.



##Release Notes

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



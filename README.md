PB Design System
================
Download Zip file or Git Clone.

CD into folder and run `npm install`, then `bower install`, then `grunt serve:livepreview`.

Home page of live preview should open in default browser.

Working raw files are in `/app`.

Compiled and processed files are in `/live_preview`.

The Design System CSS processed and compacted CSS file is in `/dist/styles`. To use the design system in your project, copy `design_system.css` to your project's CSS directory.  You can then create your own CSS file to hold your project's CSS and any overrides needed.



##Release Notes

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



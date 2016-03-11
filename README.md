# Placeholder Cross Browser Solution + Textarea Limit Solution!

Technolgies/Languages used for project - > JavaScript/JQuery, CSS3, HTML5.

Problem-1: -> Placehoder is a widely used HTML5 attribute supported by modern web browsers like Google Crome, FireFox, IE etc in latest version. However, IE 9 or earlier versions
sometimes have issues while dispalying placeholders on web applications.

Problem-2 -> IE 9 or earlier versions do not sometimes support textarea limit property.

Solution:- This project aims to overcome these problems &  possible solutions have been presented.

Project makes use of JQuery & few placeholder.js files have been tried to come up with solutions.

A final solution has the code which involves a function which runs every time web page loads into DOM. This web page will be still able to show
placeholders for the input textbox, textarea fields of the web based sample form. A sample form is designed using HTML5 to test this functionality.
For password field, placeholder is masking the password showing password as a type for this project.

A solution has a Styles.css file which was initially used or tested to add placeholder class to the JQuery when page loads into DOM is set to run.
JQuery is being imported from CDN link of JQuery.

Similarly for textarea issue, textarea.js script has been imported to HTML file & page is able to limit 255 characters for comments textarea box - (for purpose of this project- 255 chrs) 

Results:-> A final solution is able to show placeholder successfully when web page is runnning in IE9 or earlier versions. Hence a possible
cross browser solutions has been achieved. Also, textarea functionality is working fine.

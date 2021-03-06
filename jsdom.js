const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
      crossorigin="anonymous"/>
    <title>To do List</title>
</head>
<body>
    <div class="list-items">
        <div class="to-do">Today's To Do :muscle::skin-tone-2:</div>
        <div class="input">
            <input id="input-list" class="input-list" type="text" maxlength="50" placeholder="Add to your list...">
            <input type="submit" class="add" value="Add task">
        </div>
        <div id="task" class="tasks" >
        </div>
        <button class="deletebtn" type="button">Clear All Completed </button>
    </div>
</body>
</html>`, { url: 'https://localhost/' });
global.document = dom.window.document;
global.window = dom.window;
exports.globaldocument = global.document;

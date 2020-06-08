// to DEBBUG: go to index.html, RClick, choose debug
// This will display the html page & events on that page will trigger your JS code
// You can step through the JS execution with F8.
// You may need a breakpoint to pause execution. Alt+ F9 runs to cursor. F9 resumes.

// table aliases are not required, though I've run into problems when I didn't use
//      I think this was because of a naming problem

    var inStr, text;
    var sel, upd, wur, frm; // used in searching indexes of strings
    inStr = "SELECT * FROM TableName , , WHERE id=1 Id=2 AND AND WITH UR";
    console.log("input is:" + inStr + "<br>");
    var str = inStr.split(" ");
    noSpaces = inStr.replace(/\s/g, "");

    // check for obvious syntax errors such as double comma or double AND
    syntaxError = noSpaces.toLowerCase().indexOf(",,");
    if(syntaxError>=0){
        x=noSpaces.substring(syntaxError-7,syntaxError+9);
        console.log("# double commas >> " + x + "<br>");
    }

    syntaxError = noSpaces.toLowerCase().indexOf("andand");
    if(syntaxError>=0){
        x=noSpaces.substring(syntaxError-7,syntaxError+9);
        console.log("# double AND >> " + x + "<br>");
    }

    syntaxError = noSpaces.toLowerCase().indexOf("andwithur");
    if(syntaxError>=0){
        x=noSpaces.substring(syntaxError-7,syntaxError+9);
        console.log("# AND WITH UR >> " + x + "<br>");
    }

    // check if select or update
    sel = inStr.toLowerCase().indexOf("select");
    upd = inStr.toLowerCase().indexOf("update");
    wur = inStr.toLowerCase().indexOf("with ur");
    frm = inStr.toLowerCase().indexOf("from");

    if((sel>=0) && (wur<0)){
        console.log("# missing WITH UR at end<br>")
        }

    if((sel>=0) && (upd>=0)){
        console.log("SELECT & UPDATE both found <br>")
    }

    if(frm<0){
        console.log("# missing FROM <br>")
    }

// find these: SELECT or UPDATE, FROM, WITH UR (if SELECT)
// if WHERE exists, ensure separated by ANDs
// look for aliases after tableNames
// check that WHERE field equates are good relationships
// do the select fields match what you need?

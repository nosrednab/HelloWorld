// to DEBBUG: go to index.html, RClick, choose debug
// This will display the html page & events on that page will trigger your JS code
// You can step through the JS execution with F8.
// You may need a breakpoint to pause execution. Alt+ F9 runs to cursor. F9 resumes.

// table aliases are not required, though I've run into problems when I didn't use
//      I think this was because of a naming problem

function myFunction() {
    var inStr, text;
    var sel, upd, wur, frm; // used in searching indexes of strings
    // Get the value of the input field with id="numb"
    // **uncomment to get input from web page
    // inStr = document.getElementById("numb").value;
    // use this to avoid having to type input
    inStr = "SELECT * FROM TableName , , WHERE id=1 Id=2 AND AND WITH UR";
    document.write("input is:" + inStr + "<br>");

    // If x is Not a Number or less than one or greater than 10
    // how to declare an array
    //var str = ["1", "2", "3"];
    var str = inStr.split(" ");
    // replace all & ignore case x = inStr.replace(/strToFind/g/i, "FoundIt");
    // \s represents all white space, equivalent to [ \t\r\n\f\
    noSpaces = inStr.replace(/\s/g, "");
    //document.write("noSpaces is:" + noSpaces + "<br>");

    //document.write("input array is:" + str + "<br>");
    //document.write("inStr length is:" + inStr.length + "<br>");
    //document.write("first element is:" + str[0] + "<br>");

    // check for obvious syntax errors such as double comma or double AND
    syntaxError = noSpaces.toLowerCase().indexOf(",,");
    if(syntaxError>=0){
        x=noSpaces.substring(syntaxError-7,syntaxError+9);
        document.write("# double commas >> " + x + "<br>");
    }

    syntaxError = noSpaces.toLowerCase().indexOf("andand");
    if(syntaxError>=0){
        x=noSpaces.substring(syntaxError-7,syntaxError+9);
        document.write("# double AND >> " + x + "<br>");
    }

    syntaxError = noSpaces.toLowerCase().indexOf("andwithur");
    if(syntaxError>=0){
        x=noSpaces.substring(syntaxError-7,syntaxError+9);
        document.write("# AND WITH UR >> " + x + "<br>");
    }

    // check if select or update
    sel = inStr.toLowerCase().indexOf("select");
    upd = inStr.toLowerCase().indexOf("update");
    wur = inStr.toLowerCase().indexOf("with ur");
    frm = inStr.toLowerCase().indexOf("from");

    if((sel>=0) && (wur<0)){
        document.write("# missing WITH UR at end<br>")
        }

    if((sel>=0) && (upd>=0)){
        document.write("SELECT & UPDATE both found <br>")
    }

    if(frm<0){
        document.write("# missing FROM <br>")
    }

    // if select, look for "with ur"

    // here is a loop for searching element-by-element
    // for(i in str) {
    //     // i takes on index values 0,1,2, etc
    //     if(str[i].toLowerCase() == "select")
    //         document.write("SELECT was found"+"<br>");
    // }

    document.getElementById("response_to_user").innerHTML = str;
}

// find these: SELECT or UPDATE, FROM, WITH UR (if SELECT)
// if WHERE exists, ensure separated by ANDs
// look for aliases after tableNames
// check that WHERE field equates are good relationships
// do the select fields match what you need?

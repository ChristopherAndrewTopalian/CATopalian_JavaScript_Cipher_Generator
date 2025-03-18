// makeTitleOfApp.js

function makeTitleOfApp()
{
    let mainDiv = ce('div');
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = 80 + 'px';
    mainDiv.style.top = 0 + 'px';
    mainDiv.style.width = 15 + 'px';
    ba(mainDiv);

    //-//

    let titleOfApp = ce('a');
    titleOfApp.textContent = 'CATopalian JavaScript Cipher Generator';
    titleOfApp.href = 'https://github.com/christopherandrewtopalian/';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontSize = '17px';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.style.textDecoration = 'none';
    titleOfApp.style.color = 'rgb(100, 100, 100)';
    mainDiv.append(titleOfApp);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


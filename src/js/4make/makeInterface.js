// makeInterface.js

let convertedTextArray = [];

function makeInterface()
{
    let mainDiv = ce("div");
    mainDiv.className = "mainDivStyle";
    mainDiv.style.position = 'relative';
    mainDiv.style.width = '500px';
    ba(mainDiv);

    //-//

    let titleText = ce("div");
    titleText.className = "titleTextStyle";
    titleText.textContent = "CATopalian Cipher Generator";
    mainDiv.append(titleText);

    //-//

    mainDiv.append(ce('hr'));
    mainDiv.append(ce('hr'));

    //-//

    let enterText = ce("textarea");
    enterText.id = "enterText";
    enterText.className = "enterTextStyle";
    enterText.placeholder = "Enter Text Here";
    enterText.title = "Enter Text Here";
    enterText.onchange = function()
    {
        // clear unscrambledArray
        unscrambledArray = [];

        // clear the unscrambled text box
        ge("unscrambledResult").value = "";

        //-//

        let originalTextArray = enterText.value.toLowerCase().split("");

        console.log(originalTextArray);

        for (let x = 0; x < originalTextArray.length; x++)
        {
            if (originalTextArray[x] == "a")
            {
                convertedTextArray.push(originalTextArray[x] = 1);
            }

            if (originalTextArray[x] == "b")
            {
                convertedTextArray.push(originalTextArray[x] = 2);
            }

            if (originalTextArray[x] == "c")
            {
                convertedTextArray.push(originalTextArray[x] = 3);
            }

            if (originalTextArray[x] == "d")
            {
                convertedTextArray.push(originalTextArray[x] = 4);
            }

            if (originalTextArray[x] == "e")
            {
                convertedTextArray.push(originalTextArray[x] = 5);
            }

            if (originalTextArray[x] == "f")
            {
                convertedTextArray.push(originalTextArray[x] = 6);
            }

            if (originalTextArray[x] == "g")
            {
                convertedTextArray.push(originalTextArray[x] = 7);
            }

            if (originalTextArray[x] == "h")
            {
                convertedTextArray.push(originalTextArray[x] = 8);
            }

            if (originalTextArray[x] == "i")
            {
                convertedTextArray.push(originalTextArray[x] = 9);
            }

            if (originalTextArray[x] == "j")
            {
                convertedTextArray.push(originalTextArray[x] = 10);
            }

            if (originalTextArray[x] == "k")
            {
                convertedTextArray.push(originalTextArray[x] = 11);
            }

            if (originalTextArray[x] == "l")
            {
                convertedTextArray.push(originalTextArray[x] = 12);
            }

            if (originalTextArray[x] == "m")
            {
                convertedTextArray.push(originalTextArray[x] = 13);
            }

            if (originalTextArray[x] == "n")
            {
                convertedTextArray.push(originalTextArray[x] = 14);
            }

            if (originalTextArray[x] == "o")
            {
                convertedTextArray.push(originalTextArray[x] = 15);
            }

            if (originalTextArray[x] == "p")
            {
                convertedTextArray.push(originalTextArray[x] = 16);
            }

            if (originalTextArray[x] == "q")
            {
                convertedTextArray.push(originalTextArray[x] = 17);
            }

            if (originalTextArray[x] == "r")
            {
                convertedTextArray.push(originalTextArray[x] = 18);
            }

            if (originalTextArray[x] == "s")
            {
                convertedTextArray.push(originalTextArray[x] = 19);
            }

            if (originalTextArray[x] == "t")
            {
                convertedTextArray.push(originalTextArray[x] = 20);
            }

            if (originalTextArray[x] == "u")
            {
                convertedTextArray.push(originalTextArray[x] = 21);
            }

            if (originalTextArray[x] == "v")
            {
                convertedTextArray.push(originalTextArray[x] = 22);
            }

            if (originalTextArray[x] == "w")
            {
                convertedTextArray.push(originalTextArray[x] = 23);
            }

            if (originalTextArray[x] == "x")
            {
                convertedTextArray.push(originalTextArray[x] = 24);
            }

            if (originalTextArray[x] == "y")
            {
                convertedTextArray.push(originalTextArray[x] = 25);
            }

            if (originalTextArray[x] == "z")
            {
                convertedTextArray.push(originalTextArray[x] = 26);
            }

            ge("conversionResult").value = convertedTextArray;
        }

        //-//

        // we add the values together to calculate their sum
        convertedTextArray.reduce(function()
        {
            let result = convertedTextArray.reduce(function(a, b)
            {
                return a + b;
            }, 0);

            ge("sumResult").value = result;

            console.log(result);
        });
        convertedTextArray = [];
    };
    mainDiv.append(enterText);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let conversionResult = ce("textarea");
    conversionResult.id = "conversionResult";
    conversionResult.className = "conversionResultStyle";
    conversionResult.placeholder = "The Converted Values";
    conversionResult.setAttribute("readonly", "true");
    mainDiv.append(conversionResult);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let sumResult = ce("textarea");
    sumResult.id = "sumResult";
    sumResult.className = "sumResultStyle";
    sumResult.placeholder = "The Sum";
    sumResult.setAttribute("readonly", "true");
    mainDiv.append(sumResult);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let unscrambledResult = ce("textarea");
    unscrambledResult.id = "unscrambledResult";
    unscrambledResult.className = "unscrambledResultStyle";
    unscrambledResult.setAttribute("readonly", "true");
    mainDiv.append(unscrambledResult);

    //-//

    let unscrambleButton = ce("button");
    unscrambleButton.className = "unscrambleButtonStyle";
    unscrambleButton.textContent = "Unscramble";

    // when left clicked
    unscrambleButton.onclick = function()
    {
        unscrambleText()
    };
    mainDiv.append(unscrambleButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
// College of Scripting Music & Science
// Donations to paypal.me/keystonermarch


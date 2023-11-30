// Tracking Variables
var headerType = 0;
var emphasisType = 0;

inputTextDiv = document.getElementById('inputText');
inputTextDiv.addEventListener('input', parse('inputText', 'parsed'))

function parse(inputName, outputName){
    const input = document.getElementById(inputName);
    const output = document.getElementById(outputName);

    const inputString = input.innerText;
    var outputString = [];

    for(i=0; i<inputString.length; i++){
        if(inputString[i] == '\n'){
            switch (headerType){
                case 1:
                    outputString = outputString.concat(' </h1>');
                    break;
                case 2:
                    outputString = outputString.concat(' </h2>');
                    break;
                case 3:
                    outputString = outputString.concat(' </h3>');
                    break;
                case 4:
                    outputString = outputString.concat(' </h4>');
                    break;
                case 5:
                    outputString = outputString.concat(' </h5>');
                    break;
                default:
                    outputString = outputString.concat(' <br>');
                    break;
                }
        }else if(inputString[i] == '*'){
            var astCount = 0;
            for(j = i; inputString[j] == '*'; j++){
                astCount++;
            }
            if (isAlphaNumeric(inputString[i+astCount]) && emphasisType == 0){
                emphasisType = astCount;
                switch(emphasisType){
                    case 1:
                        outputString = outputString.concat('<i>');
                        break;
                    case 2:
                        outputString = outputString.concat('<b>');
                        break;
                    case 3:
                        outputString = outputString.concat('<i><b>');
                        break;
                    default:
                        break;
                }
                i+= emphasisType;
            }else if(emphasisType != 0){
                switch(emphasisType){
                    case 1:
                        outputString = outputString.concat('</i>');
                        break;
                    case 2:
                        outputString = outputString.concat('</b>');
                        break;
                    case 3:
                        outputString = outputString.concat('</i></b>');
                        break;
                    default:
                        break;
                }
                i+= emphasisType;
                emphasisType = 0;
            }
            

        }else if(inputString[i] == '#' && inputString[i-1] =='\n'){
            var hashCount = 0;
            for(j = i; inputString[j] == '#'; j++){
                hashCount++;
            }
            headerType = hashCount;
            i+= hashCount;

            switch (headerType){
                case 1:
                    outputString = outputString.concat(' <h1>');
                    break;
                case 2:
                    outputString = outputString.concat(' <h2>');
                    break;
                case 3:
                    outputString = outputString.concat(' <h3>');
                    break;
                case 4:
                    outputString = outputString.concat(' <h4>');
                    break;
                case 5:
                    outputString = outputString.concat(' <h5>');
                    break;
                default:
                    break;
            }
        }
            outputString = outputString.concat(inputString[i]);
    }
    output.innerHTML = outputString.join('');
}


// Utility Functions

function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };
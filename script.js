var inputText = document.getElementById('input-text');
function morse() {     
    document.getElementById('output-text').innerHTML = '';
    var text = inputText.value.toUpperCase();
    for(i=0;i<text.length;i++){
        switch(text[i]){
            case 'A' : document.getElementById('output-text').innerHTML += '.-'; break;
            case 'B' : document.getElementById('output-text').innerHTML += '-...'; break;
            case 'D' : document.getElementById('output-text').innerHTML += '-..'; break;
            case 'E' : document.getElementById('output-text').innerHTML += '.'; break;
            case 'F' : document.getElementById('output-text').innerHTML += '..-.'; break;
            case 'G' : document.getElementById('output-text').innerHTML += '--.'; break;
            case 'H' : document.getElementById('output-text').innerHTML += '....'; break;
            case 'I' : document.getElementById('output-text').innerHTML += '..'; break;
            case 'J' : document.getElementById('output-text').innerHTML += '.---'; break;
            case 'K' : document.getElementById('output-text').innerHTML += '-.-'; break;
            case 'L' : document.getElementById('output-text').innerHTML += '.-..'; break;
            case 'M' : document.getElementById('output-text').innerHTML += '--'; break;
            case 'N' : document.getElementById('output-text').innerHTML += '-.'; break;
            case 'O' : document.getElementById('output-text').innerHTML += '---'; break;
            case 'P' : document.getElementById('output-text').innerHTML += '.--.'; break;
            case 'Q' : document.getElementById('output-text').innerHTML += '--.-'; break;
            case 'R' : document.getElementById('output-text').innerHTML += '.-.'; break;
            case 'S' : document.getElementById('output-text').innerHTML += '...'; break;
            case 'T' : document.getElementById('output-text').innerHTML += '-'; break;
            case 'U' : document.getElementById('output-text').innerHTML += '..-'; break;
            case 'V' : document.getElementById('output-text').innerHTML += '...-'; break;
            case 'W' : document.getElementById('output-text').innerHTML += '.--'; break;
            case 'X' : document.getElementById('output-text').innerHTML += '-..-'; break;
            case 'Y' : document.getElementById('output-text').innerHTML += '-.--'; break;
            case 'Z' : document.getElementById('output-text').innerHTML += '--..'; break;
            case '1' : document.getElementById('output-text').innerHTML += '.----'; break;
            case '2' : document.getElementById('output-text').innerHTML += '..---'; break;
            case '3' : document.getElementById('output-text').innerHTML += '...--'; break;
            case '4' : document.getElementById('output-text').innerHTML += '....-'; break;
            case '5' : document.getElementById('output-text').innerHTML += '.....'; break;
            case '6' : document.getElementById('output-text').innerHTML += '-....'; break;
            case '7' : document.getElementById('output-text').innerHTML += '--...'; break;
            case '8' : document.getElementById('output-text').innerHTML += '---..'; break;
            case '9' : document.getElementById('output-text').innerHTML += '----.'; break;
            case '0' : document.getElementById('output-text').innerHTML += '-----'; break;
            case ' ' : document.getElementById('output-text').innerHTML += ' ** '; break;
            case '.' : document.getElementById('output-text').innerHTML += '.-.-.-'; break;
            case ',' : document.getElementById('output-text').innerHTML += '--..--'; break;
            case 'C': 
            if (text[i+1]=='H'){
                    document.getElementById('output-text').innerHTML += '-----';
                     i++;
            }
                    else document.getElementById('output-text').innerHTML += '-.-.';
            break;
        }
        document.getElementById('output-text').innerHTML += ' / '
    }
}

function copy() {
    var copyText = document.getElementById("output-text");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  }
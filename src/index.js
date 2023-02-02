const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseTable = {
        '**********': ' ',

    };
    for (let elementKey in MORSE_TABLE) {
        let elementNew = elementKey.split("").map(signal=>{
            if (signal==="."){
                return 10;
            }else if(signal==="-"){
                return 11
            }
        })
        elementNew = elementNew.join("");
        if (elementNew.length<10){
            let lengthElement = elementNew.length;
            let addLength = "0".repeat(10-lengthElement);
            elementNew = addLength + elementNew;
        }
        morseTable[elementNew]=MORSE_TABLE[elementKey]

    }

    let result =[]
    for (let i=0; i<(expr.length/10); i++){
        result[i] =expr.slice(i*10,(i+1)*10);
    }
    let resultNew = result.map(el=>morseTable[el]).join("");
    return resultNew;
}

module.exports = {
    decode
}
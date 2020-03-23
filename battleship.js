let board = [],
    boardTwo = [],
    boardThree = [],
    fs = require("fs"),
    arrCoordinates = [],
    translateCoordinates = [];



// ФУНКЦИЯ РАНДОМНОЙ БУКВЫ И ЧИСЛА
function getRandomLetter(arr) {
    let rand = (Math.floor(Math.random() * arr.length));
    return arr[rand];
}

function getRandomNumber(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.floor(rand);
}




// ФУНКЦИЯ ДВУХ РАНДОМНЫХ ЧИСЕЛ

function twoRandomNumbers() {
    arrCoordinates = [];
    let rand1 = Math.floor(Math.random() * 9);
    arrCoordinates.push(rand1);
    let rand2 = Math.floor(Math.random() * 9);
    arrCoordinates.push(rand2);
}


// ФУНКЦИЯ СОЗДАНИЯ МАССИВА ПОЛЯ (1 СТОРОНА)
const createBoard = function (arg) {
    let x = 10, y = 10;
    for (let i = 0; i < y; i++) {
        arg[i] = [0];
        for (let j = 0; j < x; j++) {
            arg[i][j] = '🌊';
        }
    }
};





//  ФУНКЦИЯ ПРИНИМАЮЩАЯ РАНДОМНЫЕ КООРДИНАТЫ И ВЫДАЮЩАЯ ЭЛЕМЕНТ МАССИВА
const ourTurnShot = function (char, num) {
    let numChar;

    switch (char) {
        case 'A':
            numChar = 0;
            break;
        case 'B':
            numChar = 1;
            break;
        case 'C':
            numChar = 2;
            break;
        case 'D':
            numChar = 3;
            break;
        case 'E':
            numChar = 4;
            break;
        case 'F':
            numChar = 5;
            break;
        case 'G':
            numChar = 6;
            break;
        case 'H':
            numChar = 7;
            break;
        case 'I':
            numChar = 8;
            break;
        case 'J':
            numChar = 9;
            break;
        default:
            console.log('Такой буквы нет!')
    }
    translateCoordinates[0] = (num - 1);
    translateCoordinates[1] = numChar;
    return translateCoordinates;

};



// ФУНКЦИЯ ПРОВЕРКИ И РАССТАВЛЕНИЯ КОРАБЛЕЙ ПО ПУСТОМУ ПОЛЮ

function createShips(arg) {

    let arrShips = [
        [5, 1, 'Carrier'],
        [4, 1, 'Battleship'],
        [3, 1, 'Cruiser'],
        [2, 2, 'Destroyer'],
        [1, 2, 'Submarine']
    ];

    function createShipsOne(arg) {
        outer: while (arrShips[4][1] > 0) {
            twoRandomNumbers();
            if (arrCoordinates[1] + 2 > 9) {
                continue outer;
            }
            for (let i = arrCoordinates[0] - 1 < 0 ? arrCoordinates[0] : arrCoordinates[0] - 1; i < arrCoordinates[0] + 2; i++) {
                for (let j = arrCoordinates[1] - 1 < 0 ? arrCoordinates[1] : arrCoordinates[1] - 1; j < arrCoordinates[1] + 2; j++) {
                    if (arg[i][j] !== '🌊') {
                        continue outer;
                    }
                }
            }

            arg[arrCoordinates[0]][arrCoordinates[1]] = '🚢';
            arrShips[4][1]--;
        }
    }


    function createShipsTwo(arg) {

        let randPart = Math.floor(Math.random() * (2 - 1 + 1));

        outer: while (arrShips[3][1] > 0) {
            twoRandomNumbers();
            if (randPart === 1) {
                if (arrCoordinates[0] + 3 > 9) {
                    continue outer;
                }
                for (let i = arrCoordinates[0] - 1 < 0 ? arrCoordinates[0] : arrCoordinates[0] - 1; i < arrCoordinates[0] + 3; i++) {
                    for (let j = arrCoordinates[1] - 1 < 0 ? arrCoordinates[1] : arrCoordinates[1] - 1; j < arrCoordinates[1] + 2; j++) {
                        if (arg[i][j] !== '🌊') {
                            continue outer;
                        }
                    }
                }

                arg[arrCoordinates[0]][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0] + 1][arrCoordinates[1]] = '🚢';
                arrShips[3][1]--;
            } else {

                if (arrCoordinates[1] + 3 > 9) {
                    continue outer;
                }
                for (let i = arrCoordinates[0] - 1 < 0 ? arrCoordinates[0] : arrCoordinates[0] - 1; i < arrCoordinates[0] + 2; i++) {
                    for (let j = arrCoordinates[1] - 1 < 0 ? arrCoordinates[1] : arrCoordinates[1] - 1; j < arrCoordinates[1] + 3; j++) {
                        if (arg[i][j] !== '🌊') {
                            continue outer;
                        }
                    }
                }

                arg[arrCoordinates[0]][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0]][arrCoordinates[1] + 1] = '🚢';
                arrShips[3][1]--;
            }
        }
    }


    function createShipsThree(arg) {

        let randPart = Math.floor(Math.random() * (2 - 1 + 1));

        outer: while (arrShips[2][1] > 0) {
            twoRandomNumbers();
            if (randPart === 1) {
                if (arrCoordinates[0] + 4 > 9) {
                    continue outer;
                }
                for (let i = arrCoordinates[0] - 1 < 0 ? arrCoordinates[0] : arrCoordinates[0] - 1; i < arrCoordinates[0] + 4; i++) {
                    for (let j = arrCoordinates[1] - 1 < 0 ? arrCoordinates[1] : arrCoordinates[1] - 1; j < arrCoordinates[1] + 2; j++) {
                        if (arg[i][j] !== '🌊') {
                            continue outer;
                        }
                    }
                }

                arg[arrCoordinates[0]][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0] + 1][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0] + 2][arrCoordinates[1]] = '🚢';
                arrShips[2][1]--;
            } else {

                if (arrCoordinates[1] + 4 > 9) {
                    continue outer;
                }
                for (let i = arrCoordinates[0] - 1 < 0 ? arrCoordinates[0] : arrCoordinates[0] - 1; i < arrCoordinates[0] + 2; i++) {
                    for (let j = arrCoordinates[1] - 1 < 0 ? arrCoordinates[1] : arrCoordinates[1] - 1; j < arrCoordinates[1] + 4; j++) {
                        if (arg[i][j] !== '🌊') {
                            continue outer;
                        }
                    }

                    arg[arrCoordinates[0]][arrCoordinates[1]] = '🚢';
                    arg[arrCoordinates[0]][arrCoordinates[1] + 1] = '🚢';
                    arg[arrCoordinates[0]][arrCoordinates[1] + 2] = '🚢';
                    arrShips[2][1]--;
                }
            }
        }
    }


    function createShipsFour(arg) {

        let randPart = Math.floor(Math.random() * (2 - 1 + 1));

        outer: while (arrShips[1][1] > 0) {
            twoRandomNumbers();
            if (randPart === 1) {
                if (arrCoordinates[0] + 5 > 9) {
                    continue outer;
                }
                for (let i = arrCoordinates[0] - 1 < 0 ? arrCoordinates[0] : arrCoordinates[0] - 1; i < arrCoordinates[0] + 5; i++) {
                    for (let j = arrCoordinates[1] - 1 < 0 ? arrCoordinates[1] : arrCoordinates[1] - 1; j < arrCoordinates[1] + 2; j++) {
                        if (arg[i][j] !== '🌊') {
                            continue outer;
                        }
                    }
                }

                arg[arrCoordinates[0]][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0] + 1][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0] + 2][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0] + 3][arrCoordinates[1]] = '🚢';
                arrShips[1][1]--;
            } else {

                if (arrCoordinates[1] + 5 > 9) {
                    continue outer;
                }
                for (let i = arrCoordinates[0] - 1 < 0 ? arrCoordinates[0] : arrCoordinates[0] - 1; i < arrCoordinates[0] + 2; i++) {
                    for (let j = arrCoordinates[1] - 1 < 0 ? arrCoordinates[1] : arrCoordinates[1] - 1; j < arrCoordinates[1] + 5; j++) {
                        if (arg[i][j] !== '🌊') {
                            continue outer;
                        }
                    }
                }

                arg[arrCoordinates[0]][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0]][arrCoordinates[1] + 1] = '🚢';
                arg[arrCoordinates[0]][arrCoordinates[1] + 2] = '🚢';
                arg[arrCoordinates[0]][arrCoordinates[1] + 3] = '🚢';
                arrShips[1][1]--;
            }
        }
    }


    function createShipsFive(arg) {

        let randPart = Math.floor(Math.random() * (2 - 1 + 1));

        outer: while (arrShips[0][1] > 0) {
            twoRandomNumbers();
            if (randPart === 1) {
                if (arrCoordinates[0] + 6 > 9) {
                    continue outer;
                }
                for (let i = arrCoordinates[0] - 1 < 0 ? arrCoordinates[0] : arrCoordinates[0] - 1; i < arrCoordinates[0] + 6; i++) {
                    for (let j = arrCoordinates[1] - 1 < 0 ? arrCoordinates[1] : arrCoordinates[1] - 1; j < arrCoordinates[1] + 2; j++) {
                        if (arg[i][j] !== '🌊') {
                            continue outer;
                        }
                    }
                }

                arg[arrCoordinates[0]][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0] + 1][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0] + 2][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0] + 3][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0] + 4][arrCoordinates[1]] = '🚢';
                arrShips[0][1]--;
            } else {

                if (arrCoordinates[1] + 6 > 9) {
                    continue outer;
                }
                for (let i = arrCoordinates[0] - 1 < 0 ? arrCoordinates[0] : arrCoordinates[0] - 1; i < arrCoordinates[0] + 2; i++) {
                    for (let j = arrCoordinates[1] - 1 < 0 ? arrCoordinates[1] : arrCoordinates[1] - 1; j < arrCoordinates[1] + 6; j++) {
                        if (arg[i][j] !== '🌊') {
                            continue outer;
                        }
                    }
                }

                arg[arrCoordinates[0]][arrCoordinates[1]] = '🚢';
                arg[arrCoordinates[0]][arrCoordinates[1] + 1] = '🚢';
                arg[arrCoordinates[0]][arrCoordinates[1] + 2] = '🚢';
                arg[arrCoordinates[0]][arrCoordinates[1] + 3] = '🚢';
                arg[arrCoordinates[0]][arrCoordinates[1] + 4] = '🚢';
                arrShips[0][1]--;
            }
        }
    }

createShipsFive(arg);
createShipsFour(arg);
createShipsThree(arg);
createShipsTwo(arg);
createShipsOne(arg);



}



// ФУНКЦИЯ, ПРИНИМАЮЩАЯ ДОСКУ МАССИВОВ И ВОЗВРАЩАЮЩАЯ СТРОКИ
function writeField(field) {
    let stringField = '';
    for (let i = 0; i < field.length; i++) {
        stringField += field[i].join() + '\n';
    }
    return stringField;
}



// ФУНКЦИЯ, ЗАПИСЫВАЮЩАЯ СТРОКИ ДОСКИ В ТЕКСТОВЫЙ ФАЙЛ
function writeParseField(filename, writeFunc) {
    let out = fs.writeFileSync(filename, writeFunc);
    return out;
}

// writeParseField('./field.txt', writeField(board));

function readField(file) {
    const content = fs.readFileSync(file, "utf8");
    console.log(content);
}



function readParseField(file) {
    const content = fs.readFileSync(file, "utf8");
    board = content.split(`\n`)
        .map(line => line.split(','))
        .filter(line => line.length >= 1);
}

function readParseFieldTwo(file) {
    const content = fs.readFileSync(file, "utf8");
    boardTwo = content.split(`\n`)
        .map(line => line.split(','))
        .filter(line => line.length >= 1);
}

function readParseFieldThree(file) {
    const content = fs.readFileSync(file, "utf8");
    boardThree = content.split(`\n`)
        .map(line => line.split(','))
        .filter(line => line.length >= 1);
}

function checkShotComp(arg) {
    twoRandomNumbers();
    let x = arrCoordinates[0],
        y = arrCoordinates[1];
    console.log(arrCoordinates);

    if (arg[x][y] != '🌊') {
        arg[x][y] = '❌';
        console.log('Попал! Ранен!');
    } else if (arg[x][y] == '🌊' ){
        arg[x][y] = '⭕️';
        console.log('Мимо!');

    }
}


function checkShot(arg) {
    let x = translateCoordinates[0],
        y = translateCoordinates[1];
    console.log(translateCoordinates);


    if (arg[x][y] != '🌊') {
        boardThree[x][y] = '❌';
        arg[x][y] = '❌';
        console.log('Попал! Ранен!');
    } else if (arg[x][y] == '🌊' ){
        boardThree[x][y] = '⭕️';
        arg[x][y] = '⭕️';
        console.log('Мимо!');


    }
}



switch (process.argv[2]) {
    case 'start':
        createBoard(board);
        createBoard(boardTwo);
        createBoard(boardThree);
        createShips(board);
        createShips(boardTwo);
        console.log('Твое поле!');
        writeParseField('./field.txt', writeField(board));
        console.log(writeField(board));
        console.log('Поле противника!');
        writeParseField('./fieldTwo.txt', writeField(boardTwo));
        writeParseField('./fieldThree.txt', writeField(boardThree));
        console.log(writeField(boardThree));
        break;

    case 'shot':
        readParseField("./field.txt");
        readParseFieldTwo("./fieldTwo.txt");
        readParseFieldThree("./fieldThree.txt");
        ourTurnShot(process.argv[3], process.argv[4]);
        checkShot(boardTwo);
        writeParseField('./field.txt', writeField(board));
        writeParseField('./fieldTwo.txt', writeField(boardTwo));
        writeParseField('./fieldThree.txt', writeField(boardThree));
        console.log(writeField(board));
        console.log(writeField(boardThree));
        break;

    case 'shotTwo':

        readParseField("./field.txt");
        readParseFieldTwo("./fieldTwo.txt");
        readParseFieldThree("./fieldThree.txt");
        // ourTurnShot(process.argv[3], process.argv[4]);
        checkShotComp(board);
        writeParseField('./field.txt', writeField(board));
        writeParseField('./fieldTwo.txt', writeField(boardTwo));
        writeParseField('./fieldThree.txt', writeField(boardThree));
        console.log(writeField(board));
        console.log(writeField(boardThree));
        break;

    case 'show':
        readField('./field.txt');

}
// 🚢
// 🌊
//
// createShipsFive();
// createShipsFour();
// createShipsThree();
// createShipsTwo();
// createShipsOne();


// for (let i = 0; i < board.length; i++) {
//     console.log(board[i].join() + '\n');
// }

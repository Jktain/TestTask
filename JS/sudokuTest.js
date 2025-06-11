const validSolution = (arr) => {
    const checkSet = new Set();

    // перевірка по горизонталі
    for(let row = 0; row < 9; row++){
        checkSet.clear();

        for(let col = 0; col < 9; col++){
            if(arr[row][col] == 0) return false;

            checkSet.add(arr[row][col]);
        }

        if(checkSet.size < 9) return false;
    }

    // перевірка по вертикалі
    for(let col = 0; col < 9; col++){
        checkSet.clear();

        for(let row = 0; row < 9; row++){
            checkSet.add(arr[row][col]);
        }

        if(checkSet.size < 9) return false;
    }

    // перевірка по блокам
    let row, col;

    for (let i = 0; i < 9; i++) {
        checkSet.clear();
        
        row = Math.floor(i / 3) * 3;
        col = (i % 3) * 3;

        for(let j = 0; j < 3; j++){
            checkSet.add(arr[row + j][col]);
            checkSet.add(arr[row + j][col + 1]);
            checkSet.add(arr[row + j][col + 2]);
        }

        if (checkSet.size < 9) return false;
    }

    return true;
}

// Тести
// let result = validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]

// ]);

// console.log(result);

// result = validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]);

// console.log(result);
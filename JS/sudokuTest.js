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

        for(let j = row; j < row; row++){
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
}
var table = [1, 5, 3, 2, 9];

for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length - 1; j++) {
        if (table[j] > table[j + 1]) {
            var temp = table[j];
            table[j] = table[j + 1];
            table[j + 1] = temp;
        }
    }
}

console.log(table);

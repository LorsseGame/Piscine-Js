var colors = ['red', 'green', 'blue', 'yellow'];
var secondTable = ['red', 'gray', 'orange', 'yellow'];

function fusion(table1, table2) {
    for (let i = 0; i < table2.length; i++) {
        table1.push(table2[i]);
    }
}

function deleteDouble(table) {
    return table.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

fusion(colors, secondTable);
colors = deleteDouble(colors);
console.log(colors);

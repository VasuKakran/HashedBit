const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
    ];

let results = students.map((x) => ([x.name, x.scores.reduce(function(sum,value){ return sum + value})/ x.scores.length]));

console.log(results);
const words = ['agus', 'aren', 'ari sandi', 'awaludin', 'arie akbar', 'dani']
const result = words.filter(word => word.length > 6);
console.log(result);
// output: ["ari sandi", "awaludin", "arie akbar"]

const nama = ['agus', 'aren', 'ari sandi', 'awaludin', 'arie akbar', 'dani']
const hasil = nama.filter(name => name.includes("r"));
console.log(hasil);
//output : [ 'aren', 'ari sandi', 'arie akbar' ]
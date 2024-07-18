const para = "count the number of words in a paragraph"

console.log(countWords(para));

function countWords(para){
    let count = 0;
    for(let i = 0; i < para.length; ++i){
        if(para[i] == " ") ++count;
    }

    return count+1;
}
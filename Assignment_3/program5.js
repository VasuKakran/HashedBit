let text = "I am Paul Attredis!!!";
console.log(text);


correctfn(text,"Paul Attredis","Duke of Arrakis");

function correctfn(text,wrong,right){
    let new_text = text.replace(wrong,right);
    console.log(new_text);
}
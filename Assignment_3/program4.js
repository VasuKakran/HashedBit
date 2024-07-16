function count(str){
    str = str.toUpperCase();
    var vowels = 0, cons = 0;
    for(var i = 0; i < str.length; ++i){
        let x = str.charAt(i);
        if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U")
           ++vowels;
        else
           ++cons;
    }

    console.log("VOWELS : " + vowels + " CONSONANTS : " + cons);
}

count("shfuihdvhduivhiuhvuisdviojiovhopsIFPI");
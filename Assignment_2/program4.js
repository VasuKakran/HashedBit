function find(n1, n2) {
    sum = 0;
    while (n1 != 0 || n2 != 0) {
        digit1 = n1 % 10;
        digit2 = n2 % 10;

        sum += (digit1 * digit2);

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    console.log(sum);
}

find(6, 34);
function findTax(salary) {
    switch (salary) {
        case salary <= 0:
            taxRate = -1;
            break;
        case salary <= 500000:
            taxRate = 0; // 0% tax
            break;
        case salary <= 1000000:
            taxRate = 0.1; // 10% tax
            break;
        case salary <= 1500000:
            taxRate = 0.2; //20% tax
            break;
        default:
            taxRate = 0.3; // 30% tax
    }

    if (taxRate == -1)
        console.log("INVALID INPUT");
    else
        console.log("YOUR TAX : " + (taxRate * salary));
}

findTax(500000)
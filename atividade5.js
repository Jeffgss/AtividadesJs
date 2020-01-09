const finalYear = 2020;
let increase = 0.015;
let salary = 1000;

for (let year = 2011; year <= finalYear; year++) {
    if (year !== 2011) {
        increase = increasePercentage(increase);
    }
    const calculatedSalary = increaseSalary(salary, increase);
    console.log(`increase de ${year}: ${increase}%. Total R$${calculatedSalary}`);
}

function increaseSalary(salary, increase) {
    const calculatedSalary = salary * (1 + increase);
    return parseFloat(calculatedSalary.toFixed(2));
}
function increasePercentage(perc) {
    return perc * 2
}
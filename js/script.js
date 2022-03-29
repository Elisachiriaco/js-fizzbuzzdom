let numero = 100;
const app = document.getElementById('app');
const row = document.createElement('div');
row.setAttribute('class', 'row g-2')
app.append(row);

for (let i = 1; i <= numero; i++) {

    const col = document.createElement('div');
    col.setAttribute('class', 'col-12 col-sm-6 col-md-4 col-lg-2');
    const box = document.createElement('div');

    if (i % 3 == 0 && i % 5 == 0) {
        console.log((i) + " : FizzBuzz");
        box.innerHTML += `<h2>FizzBuzz</h2>`
        box.setAttribute('class', 'text color4');
        for (let c = 0; c < i.length; c++) {
        }

    } else if (i % 5 === 0) {
        console.log((i) + " : Buzz");
        box.innerHTML += `<h2>Buzz</h2>`
        box.setAttribute('class', 'text color2');
        for (let c = 0; c < i.length; c++) {
        }

    } else if (i % 3 === 0) {
        console.log((i) + " : Fizz");
        box.innerHTML += `<h2>Fizz</h2>`
        box.setAttribute('class', 'text color3');
        for (let c = 0; c < i.length; c++) {
        }

    } else {
        box.innerHTML += `<h2>${[i]}</h2>`
        box.setAttribute('class', 'text color1');
    }

    col.append(box);
    row.append(col);
    app.append(row);
}
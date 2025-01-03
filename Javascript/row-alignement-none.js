const labelFor = document.querySelector('label[for="revenu-mensuel"] ');
const rowGarant = document.querySelector('.row-garant ');
let garant = 3;


if (garant < 1) {
    labelFor.style.display = 'none';
    rowGarant.style.flexWrap = 'nowrap';

}

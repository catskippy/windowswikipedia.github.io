let str = '';
const reference = 'hello';
const t1 = '67|97|116|32|83|107|105|112|112|121|46';
const t2 = '66|101|116|97|32|116|101|115|116|32|119|105|107|105|112|101|100|105|97|33';

document.addEventListener('keypress', event => {
    str += event.key;
    console.log(str);
    if (reference.indexOf(str) !== 0) {
        str = '';
        return;
    }
    if (str === reference) {
        console.clear();
        console.log(text(t1));
        console.log(text(t2));   
        str = '';
    }
});

const text = str => str.split('|')
        .map(item => String.fromCharCode(item))
        .join('');

// let str2 = 'Cat Skippy. Beta test wikipedia!';
// let crypted = str2.split('').map(value => value.charCodeAt(0) ).join('|');
// console.log(crypted);


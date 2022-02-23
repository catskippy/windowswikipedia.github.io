let str = '';
const reference = 'test';
const t1 = '76|101|97|118|101|32|112|108|101|97|115|101|33|32|84|104|105|115|32|115|105|116|101|32|102|111|114|32|116|101|115|116|115|46';

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
        str = '';
    }
});

const text = str => str.split('|')
        .map(item => String.fromCharCode(item))
        .join('');

// let str2 = 'Cat Skippy. Beta test wikipedia!';
// let crypted = str2.split('').map(value => value.charCodeAt(0) ).join('|');
// console.log(crypted);


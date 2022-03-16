/**
 * Convert from number to Vietnamese string.
 * @type {String}
 */

var default_numbers = ' hai ba bốn năm sáu bảy tám chín';

var units = ('1 một' + default_numbers).split(' ');
var ch = 'lẻ mười' + default_numbers;
var tr = 'không một' + default_numbers;
var tram = tr.split(' ');
var u = '2 nghìn triệu tỉ'.split(' ');
var chuc = ch.split(' ');
/**
 * additional words
 * @param  {[type]} a [description]
 * @return {[type]}   [description]
 */
export function tenth(a:any) {
  var sl1 = units[a[1]];
  var sl2 = chuc[a[0]];
  var append = '';
  if (a[0] > 0 && a[1] === 5) sl1 = 'lăm';
  if (a[0] > 1) {
    append = ' mươi';
    if (a[1] === 1) sl1 = ' mốt';
  }
  var str = sl2 + '' + append + ' ' + sl1;
  return str;
}

/**
 * convert number in blocks of 3
 * @param  {[type]} d [description]
 * @return {[type]}   [description]
 */
export function block_of_three(d:any) {
  let _a : any = d + '';
  if (d === '000') return '';
  switch (_a.length) {
    case 0:
      return '';

    case 1:
      return units[_a];

    case 2:
      return tenth(_a);

    case 3:
      let sl12 = '';
      if (_a.slice(1, 3) !== '00') sl12 = tenth(_a.slice(1, 3));
      let sl3 = tram[_a[0]] + ' trăm';
      return sl3 + ' ' + sl12;

    default :
        break;
  }
  return null;
}
/**
 * Get number from unit, to string
 * @param  {mixed} nStr input money
 * @return {String}  money string, removed digits
 */
export function formatnumber(nStr:any) {
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

export default function to_vietnamese(value:any) {
  var str = value + ""
  var i = 0;
  var arr = [];
  var index = str?.length;
  var result = [];

  
  if (index === 0 || str === 'NaN') return '';
  var string = '';

  //explode number string into blocks of 3numbers and push to queue
  while (index >= 0) {
    arr.push(str.substring(index, Math.max(index - 3, 0)));
    index -= 3;
  }

  //loop though queue and convert each block
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '' && arr[i] !== '000') {
      result.push(block_of_three(arr[i]));
      if (u[i]) result.push(u[i]);
    }
  }

  string = result.join(' ');
  //remove unwanted white space
  return string.replace(/[0-9]/g, '').replace(/ /g, ' ').replace(/ $/, '');
}

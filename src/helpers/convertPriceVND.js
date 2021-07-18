// export default function convertPrice(number) {
//     let price = number.toString().split("").reverse()
//     for (let i = 3; i < price.length; i++) {
//         price.splice(i, 0, '.');
//         i += 3
//     }
//     return price.reverse().join('');
// }

// export default function convertPrice(value){
//     return`${​​​​​​​​value}​​​​​​​​`.replace(/\B(?=(\d{​​​​​​​​3}​​​​​​​​)+(?!\d))/g, ',')
// }

export const convertPrice = (value) => {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

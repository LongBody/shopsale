import { convertPrice } from 'helpers/convertPriceVND';
import numToVietnameseText from 'helpers/numToVietNamText';
import 'scss/checkout.scss';

export const subtotalUnChecked = (items: any) => {
  let sum = 0;
  items.map((item: any) => {
    if (item.checked === true) {
      sum += item.product.price * item.quantity;
    }
    return null;
  });

  let sumVnd = convertPrice(sum);

  return sumVnd;
};

export const priceNumberToVietnameseText = (items: any) => {
  let sum = 0;

  items.map((item: any) => {
    if (item.checked === true) {
      sum += item.product.price * item.quantity;
    }
    return null;
  });

  let sumVnd = numToVietnameseText(sum);

  return sumVnd;
};

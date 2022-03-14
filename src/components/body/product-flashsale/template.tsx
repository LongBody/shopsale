import { makeStyles } from '@material-ui/core';
import { convertPrice } from 'helpers/convertPriceVND';

export const useStyles = makeStyles({
  root: {
    maxWidth: 390,
    marginTop: 5,
  },
  media: {
    width: '100%',
  },
});

export const StyleContent = {
  marginTop: '10px',
  padding: '5px',
};

export const StyleContentTitle = {
  height: '30px',
};

export const salePrice = (price: any, sale: any) => {
  let priceSale = price - price * (sale / 100);
  return convertPrice(priceSale);
};

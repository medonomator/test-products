import { products } from '../schemas/products';
import { logger } from '../../helpers/logger';
import { getRandomNumber } from '../../helpers';
import faker from 'faker';
import { IProduct } from '../../interfaces';

export const seedProducts = async (countProducts: number) => {
  try {
    const arrayCount = Array(countProducts);
    arrayCount.fill(countProducts);

    const insertProducts: IProduct[] = [];
    for await (const _ of arrayCount) {
      const randomPrice = getRandomNumber(0, 1000);
      const productStock = getRandomNumber(0, 100);
      const productName = faker.commerce.productName();
      const productIsStock = getRandomNumber(0, 1) ? true : false;

      insertProducts.push({
        name: productName,
        stock: productStock,
        isStock: productIsStock,
        price: randomPrice,
      } as IProduct);
    }

    await products.insertMany(insertProducts);
    logger.info('Seed product complete');
  } catch (error) {
    logger.error(error);
  }
};

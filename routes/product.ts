import * as Joi from 'joi';

// import { updateEntitys } from '../controllers/entitys/update';
// import { getEntity } from '../controllers/entitys/get';
// import { getEntitys } from '../controllers/entitys/getAll';

const productRoutes = [
  {
    method: 'GET',
    path: '/product',
    handler: () => {
      return 'ok';
    },
  },
  {
    method: 'GET',
    path: '/product/{id}',
    handler: () => {
      return 'ok';
    },
    options: {
      validate: {
        params: {
          id: Joi.string().trim(),
        },
      },
    },
  },
  {
    method: 'PUT',
    path: '/product/{id}',
    handler: () => {
      return 'ok';
    },
    options: {
      validate: {
        params: {
          id: Joi.string().trim(),
        },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/product/{id}',
    handler: () => {
      return 'ok';
    },
    options: {
      validate: {
        params: {
          id: Joi.string().trim(),
        },
      },
    },
  },
];

export default productRoutes;

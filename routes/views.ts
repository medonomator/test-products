import * as Hapi from 'hapi';
import { getMainPage } from '../controllers/views';

const viewsRoutes: Hapi.ServerRoute[] = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
      },
    },
  },
  {
    method: 'GET',
    path: '/',
    handler: getMainPage,
  },
];

export default viewsRoutes;

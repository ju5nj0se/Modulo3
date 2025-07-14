import { homeView } from './components/home.js';
import { contactView } from './components/contact.js';
import { crudView } from './components/crudDevelopers.js';
import { render } from './src/main.js';


export const router = {
  'url': 'http://localhost:3000',
  '/home': homeView,
  '/contact': contactView,
  '/crudDevelopers': crudView,
  'render': render
};

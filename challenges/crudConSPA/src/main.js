import { router } from '../router.js';

const content = document.getElementById('content');
const nav = document.getElementById('nav');

nav.addEventListener('click', (event) => {;
  let path = event.target.dataset.link;
  router[path]()
});
export function render(path) {
  router[path]()
}
import { CreateElement } from './src/components/create-element.js';
import { PostCard } from './src/components/post-card.js';
import { Textarea } from './src/components/textarea.js';
import { Button } from './src/components/button.js';
import { ListPostCard } from './src/components/list-post-card.js';

const container = document.querySelector('.container');
const postCard = PostCard(container);
const textarea = Textarea('Qual é a boa de hoje?', postCard);
const button = Button('Postar', postCard);
const postCardList = CreateElement(
  'ul',
  { class: 'post-card-list' },
  null,
  container
);

button.addEventListener('click', () => {
  postCardList.insertAdjacentElement('afterbegin', ListPostCard());
});

export { textarea, button };

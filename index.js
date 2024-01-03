import CreateElement from './src/components/CreateElement.js';
import PostCard from './src/components/PostCard.js';
import Textarea from './src/components/Textarea.js';
import Button from './src/components/Button.js';
import ListPostCard from './src/components/ListPostCard.js';

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

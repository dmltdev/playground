import Cart from './components/Cart';
import Old from './components/Old';
import PostsWrapper from './components/PostsWrapper';
import Todos from './components/Todos';
import Products from './components/Products';
import Posts from './components/Posts';

export default function Home() {
  return (
    <div>
      {/* <Old /> */}
      {/* <Cart /> */}
      <Products />
      <PostsWrapper />
      <Todos />
    </div>
  );
}

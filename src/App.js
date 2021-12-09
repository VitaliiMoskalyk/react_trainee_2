
import painting from './paintings.json';
import Paintings from './components/paintings';

export default function App() {
  return (
    <div>{painting.map((painting) => <Paintings
      key={painting.id}
  url={painting.url}
  title={painting.title}
  author={painting.author.tag}
  price={painting.price}
  quantity={painting.quantity} />)}
    
  </div>);
}



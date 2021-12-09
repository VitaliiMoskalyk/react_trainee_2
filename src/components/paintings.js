import PropTypes from 'prop-types'
export default function Paintings({ url, title, author, price, quantity }) {
  
  return <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a>{author}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p>
    <button type="button">Добавить в корзину</button>
  </div>
  
}

Paintings.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  quantity: PropTypes.number,
  price:PropTypes.number,
  
}
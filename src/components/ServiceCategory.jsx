import { formatPrice } from '../data/salon'

export default function ServiceCategory({ category }) {
  return (
    <section
      className="menu-category"
      id={category.id}
      aria-labelledby={`${category.id}-title`}
    >
      <h2 id={`${category.id}-title`}>{category.name}</h2>
      {category.note ? <p className="menu-category__note">{category.note}</p> : null}
      <ul className="menu-list">
        {category.items.map((item) => (
          <li className="menu-item" key={item.name}>
            <h3>{item.name}</h3>
            <span className="menu-item__price">{formatPrice(item.price)}</span>
            {item.description ? <p>{item.description}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

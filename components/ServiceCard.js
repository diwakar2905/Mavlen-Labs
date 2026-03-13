// components/ServiceCard.js
export default function ServiceCard({ title, description, items = [] }) {
    return (
      <article className="card">
        <h3 className="card-title">{title}</h3>
        <p className="card-body">{description}</p>
        {items.length > 0 && (
          <ul className="card-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </article>
    );
  }
  
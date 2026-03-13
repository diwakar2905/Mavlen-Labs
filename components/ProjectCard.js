// components/ProjectCard.js
export default function ProjectCard({ tag, title, description, metrics = [] }) {
    return (
      <article className="card project-card">
        {tag && <p className="card-tag">{tag}</p>}
        <h3 className="card-title">{title}</h3>
        <p className="card-body">{description}</p>
        {metrics.length > 0 && (
          <ul className="card-list card-list-inline">
            {metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        )}
      </article>
    );
  }
  
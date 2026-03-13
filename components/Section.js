// components/Section.js
export default function Section({
    id,
    eyebrow,
    title,
    subtitle,
    children,
    className = '',
  }) {
    return (
      <section id={id} className={`section ${className}`}>
        <div className="section-inner">
          {(eyebrow || title || subtitle) && (
            <header className="section-header">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && <h2>{title}</h2>}
              {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </header>
          )}
          <div className="section-content">{children}</div>
        </div>
      </section>
    );
  }
  
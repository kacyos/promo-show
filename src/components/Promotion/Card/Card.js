import "./card.css";

export function PromotionCard({ promotion }) {
  return (
    <div className="promotion-card">
      <img className="promotion-card__image" src={promotion.imageUrl} alt="" />
      <div className="promotion-card__info">
        <h1 className="promotion-card__title">{promotion.title}</h1>
        <span className="promotion-card__price">{promotion.price}</span>
        <footer className="promotion-card__footer">
          {promotion.comments.length > 0 && (
            <div className=".promotion-card__comment">
              "{promotion.comments[0].comment}"
            </div>
          )}
          <div className="promotion-card__comments-count">
            {promotion.comments.length}{" "}
            {promotion.comments.length > 1 ? "Comentários" : "Comentário"}
          </div>
          <a
            className="promotion-card__link"
            href={promotion.url}
            target="_blank"
          >
            Ir para o site
          </a>
        </footer>
      </div>
    </div>
  );
}

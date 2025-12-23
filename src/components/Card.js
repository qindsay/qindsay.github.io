import "../styles.css";

const Card = ({ link, linkText, title, imageUrl, imageAlt, description, tools }) => {
    return (
        <div className="card">
            <h2>
                {title}
                <span className="title-separator"> | </span>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-title-link"
                    >
                    {linkText}
                </a>
            </h2>
                <img src={imageUrl} alt={imageAlt} />
            <p>{description}</p>
            <p>{tools}</p>
        </div>
    );
}

export default Card;
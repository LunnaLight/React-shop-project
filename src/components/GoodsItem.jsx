function GoodItem(props) {
    const { id, name, description, price, full_background,
        addToBusket = Function.prototype,
    } = props;

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img scr={full_background} alt={name}></img>
                <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn"
                    onClick={() =>
                        addToBusket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}

export { GoodItem };
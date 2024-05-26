import { GoodItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Not found :(</h3>;
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodItem key={item.imdbID} {...item} addToBasket={addToBasket}></GoodItem>
            ))}
        </div>
    );
}

export { GoodsList };
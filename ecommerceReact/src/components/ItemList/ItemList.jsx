import ItemCard from "../itemCard/ItemCard";


const ItemList = ({productos}) => {
  return (
    <section>
      <h2>Productos</h2>
      <hr />
      <div>
        {productos.map( (item) => <ItemCard key={item.id} item={item} /> )}
      </div>
    </section>
  );
};

export default ItemList;

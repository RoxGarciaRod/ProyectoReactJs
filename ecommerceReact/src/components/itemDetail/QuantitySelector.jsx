import Boton from "../botones/boton";

const QuantitySelector = ({cantidad, stock, setCantidad}) => {

    const handleSumar = () => {
        cantidad < stock && setCantidad (cantidad + 1)
       }
    
       const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
       }

  return (
    <div>
      <Boton onClick={handleRestar} label="-" />
      <span>{cantidad}</span>
      <Boton onClick={handleSumar} label="+" />
    </div>
  );
};

export default QuantitySelector

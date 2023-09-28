import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Importa el ícono de carrito de compras
import IconButton from "@mui/material/IconButton"; // Importa el componente IconButton de Material-UI

const CartWidget = () => {
  const cartItemCount = 5; // Número hardcodeado para la notificación

  return (
    <div className="cart-widget">
      <IconButton color="inherit">
        <ShoppingCartIcon />
      </IconButton>
      <span className="cart-notification">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;

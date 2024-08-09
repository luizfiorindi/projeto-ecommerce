import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutButton = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      toast.success("Compra finalizada com sucesso!");
      setCartItems([]);
      navigate("/thank-you", { state: { cartItems } });
    } else {
      toast.error("Carrinho está vazio.");
    }
  };

  return <button onClick={handleCheckout}>Finalizar Compra</button>;
};

export default CheckoutButton;

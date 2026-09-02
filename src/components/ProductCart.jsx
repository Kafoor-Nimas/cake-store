import { ShoppingCart } from "lucide-react";

const ProductCart = ({ image, name, price }) => {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md">
      <div className="overflow-hidden rounded-xl bg-gray-50">
        <img
          src={image}
          alt={name}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="mt-1 text-sm font-semibold text-purple-dark">
            ${price.toFixed(2)}
          </p>
        </div>

        <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple text-white transition-colors hover:bg-purple-dark">
          <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;

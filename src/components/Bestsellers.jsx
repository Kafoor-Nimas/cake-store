import Cupcake from "../assets/CupCake1.png";
import Cheesecake from "../assets/cheesecake3.png";
import Brownie from "../assets/brownie2.png";
import Doughnut from "../assets/donut1.png";
import ProductCart from "./ProductCart";

const products = [
  { id: 1, name: "Chocolate Cupcake", price: 2.5, image:  Cupcake  },
  { id: 2, name: "Berry Cheesecake", price: 3.75, image:  Cheesecake  },
  { id: 3, name: "Chocolate Brownie", price: 2.99, image:  Brownie  },
  { id: 4, name: "Classic Doughnut", price: 1.99, image:  Doughnut  },
];

const Bestsellers = () => {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Our Bestsellers</h2>
        <button className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-white bg-purple transition-colors hover:bg-purple-dark">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {products.map((product) => (
            <ProductCart
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;

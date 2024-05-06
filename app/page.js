import Stripe from "stripe";
import ProductCard from "./ProductCard";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2024-04-10",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  // console.log(products);

  return (
    <main className="p-1 flex flex-col">
      <div className="max-width-[1000px] w-full mx-auto p-4 grid grid-cols-1">
        {products.map((product, productIndex) => {
          return <ProductCard key={productIndex} product={product} />;
        })}
      </div>
    </main>
  );
}

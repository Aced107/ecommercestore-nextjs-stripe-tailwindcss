"use client";

import useCart from "./(store)/store";

export default function ProductCard({ product }) {
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;
  const addItemToCart = useCart((state) => state.addItemToCart);

  function handleAddToCart() {
    const newItem = {
      quantity: 1,
      price_id: price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });
  }
  return (
    <div className="min-w-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img
                src={productInfo.images[0]}
                className="w-full relative z-10"
                alt={productInfo.name}
              />
              {/* <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div> */}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">
                {productInfo.name}
              </h1>
              <p className="text-sm">{productInfo.description}</p>
            </div>
            <div className="flex gap-4 flex-col items-center xxs:items-start xxs:flex-row md:flex-col md:items-center lg:items-start lg:flex-row">
              <div className="inline-block align-bottom mr-5">
                <span className="font-bold text-5xl leading-none align-baseline">
                  €{cost / 100}
                </span>
              </div>
              <div className="inline-block align-bottom">
                <button
                  onClick={handleAddToCart}
                  className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                >
                  <i className="fa-solid fa-basket-shopping"></i> ADD TO BASKET
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

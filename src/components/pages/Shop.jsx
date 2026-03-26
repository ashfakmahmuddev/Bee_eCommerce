import React, { useState } from "react";
import Container from "../commonUi/Container";

const Shop = () => {
  // Price Filter
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  // Product Rating
  const [rating, setRating] = useState(false);

  // Product Type
  const [productTypes, setProductTypes] = useState({
    assorted: false,
    box: false,
    chair: false,
    table: false,
    tableLamp: false,
  });

  // Brand
  const [brands, setBrands] = useState({
    brothers: false,
    hatil: false,
    hurst: false,
    navana: false,
    otobi: false,
    rokomari: false,
    glass: false,
    partex: false,
    steel: false,
    wood: false,
  });

  // Size Filter
  const [sizes, setSizes] = useState({
    small: false,
    medium: false,
    large: false,
    xlarge: false,
  });

  const handlePriceFilter = () => {
    console.log("Filtering price from:", priceFrom, "to:", priceTo);
    // এখানে তোমার filtering logic আসবে
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#F5F5F5] py-12">
        <Container>
          <div>
            <h1 className="text-[32px] font-semibold text-[#282828]">
              Products
            </h1>
            <p className="text-base text-[#666666] mt-1">
              Home <span className="px-2">/</span> Products
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <div className="pt-12 pb-20">
        <Container>
          <div className="flex gap-10">
            {/* ==================== FILTER SIDEBAR ==================== */}
            <div className="w-72 flex-shrink-0 space-y-10">
              
              {/* ===== PRICE FILTER ===== */}
              <div>
                <h3 className="text-[#282828] text-xl font-medium uppercase mb-6">
                  PRICE
                </h3>

                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">$ From</div>
                    <input
                      type="number"
                      value={priceFrom}
                      onChange={(e) => setPriceFrom(e.target.value)}
                      placeholder="0"
                      className="w-28 border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#FFAE00]"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">$ To</div>
                    <input
                      type="number"
                      value={priceTo}
                      onChange={(e) => setPriceTo(e.target.value)}
                      placeholder="150.01"
                      className="w-28 border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#FFAE00]"
                    />
                  </div>
                </div>

                <button
                  onClick={handlePriceFilter}
                  className="mt-5 bg-black text-white px-8 py-3 text-sm font-medium hover:bg-[#FFAE00] hover:text-black transition-all duration-300"
                >
                  Filter
                </button>
              </div>

              {/* ===== PRODUCT RATING COUNT ===== */}
              <div>
                <h3 className="text-[#282828] text-xl font-medium uppercase mb-5">
                  PRODUCT RATING COUNT
                </h3>

                <label className="flex items-center gap-3 py-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={rating}
                      onChange={(e) => setRating(e.target.checked)}
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:border-[#FFAE00] peer-checked:bg-[#FFAE00] transition-all duration-200 group-hover:border-[#FFAE00]/70 flex items-center justify-center">
                      <svg
                        className={`w-3.5 h-3.5 text-white transition-all ${rating ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-between text-[#303030]">
                    <span>1</span>
                    <span className="text-gray-500">(5)</span>
                  </div>
                </label>
              </div>

              {/* ===== PRODUCT TYPE ===== */}
              <div>
                <h3 className="text-[#282828] text-xl font-medium uppercase mb-5">
                  PRODUCT TYPE
                </h3>
                <div className="space-y-1">
                  {[
                    { name: "assorted", label: "assorted", count: 5 },
                    { name: "box", label: "box", count: 3 },
                    { name: "chair", label: "chair", count: 6 },
                    { name: "table", label: "table", count: 3 },
                    { name: "tableLamp", label: "table-lamp", count: 2 },
                  ].map((item) => (
                    <label
                      key={item.name}
                      className="flex items-center gap-3 py-3 cursor-pointer group"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={productTypes[item.name]}
                          onChange={(e) =>
                            setProductTypes((prev) => ({
                              ...prev,
                              [item.name]: e.target.checked,
                            }))
                          }
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:border-[#FFAE00] peer-checked:bg-[#FFAE00] transition-all duration-200 group-hover:border-[#FFAE00]/70 flex items-center justify-center">
                          <svg
                            className={`w-3.5 h-3.5 text-white transition-all ${productTypes[item.name] ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 flex justify-between text-[#303030]">
                        <span className="capitalize">{item.label}</span>
                        <span className="text-gray-500">({item.count})</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* ===== BRAND ===== */}
              <div>
                <h3 className="text-[#282828] text-xl font-medium uppercase mb-5">
                  BRAND
                </h3>
                {[
                  { name: "brothers", label: "brothers", count: 6 },
                  { name: "hatil", label: "hatil", count: 4 },
                  { name: "hurst", label: "hurst", count: 2 },
                  { name: "navana", label: "navana", count: 1 },
                  { name: "otobi", label: "otobi", count: 3 },
                  { name: "rokomari", label: "rokomari", count: 5 },
                ].map((brand) => (
                  <label
                    key={brand.name}
                    className="flex items-center gap-3 py-3 cursor-pointer group"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={brands[brand.name]}
                        onChange={(e) =>
                          setBrands((prev) => ({
                            ...prev,
                            [brand.name]: e.target.checked,
                          }))
                        }
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:border-[#FFAE00] peer-checked:bg-[#FFAE00] transition-all duration-200 group-hover:border-[#FFAE00]/70 flex items-center justify-center">
                        <svg
                          className={`w-3.5 h-3.5 text-white transition-all ${brands[brand.name] ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-between text-[#303030]">
                      <span className="capitalize">{brand.label}</span>
                      <span className="text-gray-500">({brand.count})</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* ===== Material ===== */} 
              <div>
                <h3 className="text-[#282828] text-xl font-medium uppercase mb-5">
                  Material
                </h3>
                {[
                  { name: "glass", label: "glass", count: 7 },
                  { name: "partex", label: "partex", count: 8 },
                  { name: "steel", label: "steel", count: 2 },
                  { name: "wood", label: "wood", count: 9 },
                ].map((material) => (
                  <label
                    key={material.name}
                    className="flex items-center gap-3 py-3 cursor-pointer group"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={brands[material.name]}
                        onChange={(e) =>
                          setBrands((prev) => ({
                            ...prev,
                            [material.name]: e.target.checked,
                          }))
                        }
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:border-[#FFAE00] peer-checked:bg-[#FFAE00] transition-all duration-200 group-hover:border-[#FFAE00]/70 flex items-center justify-center">
                        <svg
                          className={`w-3.5 h-3.5 text-white transition-all ${brands[material.name] ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-between text-[#303030]">
                      <span className="capitalize">{material.label}</span>
                      <span className="text-gray-500">({material.count})</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* ===== SIZE FILTER ===== */}
              <div>
                <h3 className="text-[#282828] text-xl font-medium uppercase mb-5">
                  SIZE
                </h3>
                
                <div className="space-y-1">
                  {[
                    { name: "small", label: "Small", count: 8 },
                    { name: "medium", label: "Medium", count: 15 },
                    { name: "large", label: "Large", count: 12 },
                    { name: "xlarge", label: "Extra Large", count: 5 },
                  ].map((size) => (
                    <label
                      key={size.name}
                      className="flex items-center gap-3 py-3 cursor-pointer group"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={sizes[size.name]}
                          onChange={(e) =>
                            setSizes((prev) => ({
                              ...prev,
                              [size.name]: e.target.checked,
                            }))
                          }
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:border-[#FFAE00] peer-checked:bg-[#FFAE00] transition-all duration-200 group-hover:border-[#FFAE00]/70 flex items-center justify-center">
                          <svg
                            className={`w-3.5 h-3.5 text-white transition-all ${sizes[size.name] ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 flex justify-between text-[#303030]">
                        <span className="capitalize">{size.label}</span>
                        <span className="text-gray-500">({size.count})</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* ==================== PRODUCT GRID AREA ==================== */}
            <div className="flex-1">
              <p className="text-gray-500 mb-8">
                Product listing will be shown here...
              </p>
              {/* এখানে তোমার Product cards grid আসবে */}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Shop;
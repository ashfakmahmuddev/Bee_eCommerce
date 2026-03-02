import React from "react";
import Container from "../commonUi/Container";

const TrustBadges = () => {
  return (
    <div className="w-full bg-white py-6 md:py-10 border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* 1. Free Shipping */}
          <div className="flex items-center gap-3.75">
            <img
              src="/src/assets/TrustBadgesOne.png"
              alt="Free Shipping"
              className="w-10 h-10 object-contain"
            />
            <div className="">
              <h3 className="text-sm font-bold text-[#252525] uppercase tracking-wide pb-2">
                FREE SHIPPING
              </h3>
              <p className="text-[13px] text-[#7D7D7D]">
                Free shipping on all UK orders
              </p>
            </div>
          </div>
          {/* 2. Free Exchange */}
          <div className="flex items-center gap-3.75">
            <img
              src="/src/assets/TrustBadgesTwo.png"
              alt="Free Shipping"
              className="w-10 h-10 object-contain"
            />
            <div className="">
              <h3 className="text-sm font-bold text-[#252525] uppercase tracking-wide pb-2">
                FREE EXCHANGE
              </h3>
              <p className="text-[13px] text-[#7D7D7D]">
                30 days return on all items
              </p>
            </div>
          </div>
          {/* 3. Premium Support */}
          <div className="flex items-center gap-3.75">
            <img
              src="/src/assets/TrustBadgesThree.png"
              alt="Free Shipping"
              className="w-10 h-10 object-contain"
            />
            <div className="">
              <h3 className="text-sm font-bold text-[#252525] uppercase tracking-wide pb-2">
                PREMIUM SUPPORT
              </h3>
              <p className="text-[13px] text-[#7D7D7D]">
                We support online 24 hours a day
              </p>
            </div>
          </div>
          {/* 4. Black Friday */}
          <div className="flex items-center gap-3.75">
            <img
              src="/src/assets/TrustBadgesFour.png"
              alt="Free Shipping"
              className="w-10 h-10 object-contain"
            />
            <div className="">
              <h3 className="text-sm font-bold text-[#252525] uppercase tracking-wide pb-2">
                BLACK FRIDAY
              </h3>
              <p className="text-[13px] text-[#7D7D7D]">
                Shocking discount on every Friday
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrustBadges;

import React from "react";
import Container from "../commonUi/Container";
import { trustBadges } from "../../data/data";

const TrustBadges = () => {
  return (
    <div className="w-full bg-white py-6 md:py-10 border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustBadges.map((badge) => (
            <div 
              key={badge.id} 
              className="flex items-center gap-3.75"
            >
              <img
                src={badge.icon}
                alt={`${badge.title} icon`}
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-sm font-bold text-[#252525] uppercase tracking-wide pb-1.25">
                  {badge.title}
                </h3>
                <p className="text-[13px] text-[#7D7D7D]">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TrustBadges;
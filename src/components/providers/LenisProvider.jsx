import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,           // smoothness (0.05 ~ 0.1 ভালো লাগে)
        duration: 1.2,        // scroll এর গতি
        smoothWheel: true,
        smoothTouch: false,   // মোবাইলে touch smooth করতে চাইলে true করো
        wheelMultiplier: 1,
        touchMultiplier: 2,
        // autoRaf: true,     // নতুন ভার্সনে এটা ডিফল্ট true থাকে
      }}
    >
      {children}
    </ReactLenis>
  );
}
import { useState } from "react";
import Button from "../Utility/Button";
type sizes = "S" | "M" | "L" | "XL" | "XXL";
const totalSizes: sizes[] = ["S", "M", "L", "XL", "XXL"];
const Size = () => {
  const [selectedSize, setSelectedSize] = useState<sizes>("M");
  return (
    <div className="space-x-4">
      {totalSizes.map((item) => {
        return (
          <Button
            onClick={() => setSelectedSize(item)}
            className={`${
              selectedSize === item
                ? "bg-primary hover:bg-primary-hover text-primary-soft  "
                : "hover:border-cta-border  "
            } md:px-6 px-5 py-3 border border-border  rounded-2xl  text-sm hover:-translate-y-1`}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default Size;

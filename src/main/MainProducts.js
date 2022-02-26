import React from "react";
import { Card } from "../components/Card";
import { CardProducts } from "../card/CardProducts";

export const MainProducts = () => {
  return (
    <div className='mainProduct'>
      <Card>
        <CardProducts />
      </Card>
    </div>
  );
};

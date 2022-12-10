import React, { FC } from 'react';
import Search from "../home-page/search/Search";
import UiDetails from "../ui/details/UiDetails";
import ProductsTable from "../home-page/products-table/ProductsTable";
import CancelProducts from "../home-page/cancel-products/CancelProducts";

interface Props {

}

const HomePageContainer: FC<Props> = () => {

  return (
    <div>
      <h1>Work!</h1>
      <Search />
      <UiDetails title={"Показать таблицу"} activeTitle={"Свернуть таблицу"} isOpenedDefault >
        <ProductsTable/>
      </UiDetails>
      <CancelProducts />
    </div>
  );
};

export default HomePageContainer;

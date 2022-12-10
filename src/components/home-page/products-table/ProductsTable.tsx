import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styles from "./products-table.module.scss"
import ProductsItem from "./ProductsItem";
import UiCheckbox from "../../ui/checkbox/UiCheckbox";
import { changeAllSelectedStatus } from "../../../redux/features/products/productsSlice";
import { tableFields } from "../tableFields";

interface Props {

}

const ProductsTable: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const {sortedProducts, selectedProducts} = useAppSelector((state) => state.products)
  const [isAllSelected, setIsAllSelected] = useState(false)

  useEffect(() => {
    if (selectedProducts.length === sortedProducts.length) {
      setIsAllSelected(true)
    } else {
      setIsAllSelected(false)
    }
  }, [sortedProducts, selectedProducts])

  const handleAllSelect = () => {
    dispatch(changeAllSelectedStatus(isAllSelected))
  }

  return (
    <div>
      {sortedProducts.length > 0 && (
        <table className={styles["table"]}>
          <thead>
          <tr>
            <th>
              <UiCheckbox checkedStatus={isAllSelected} changeChecked={handleAllSelect} />
            </th>
            {tableFields.map((value, index) => (
              <th key={`table-title-${index}`}>
                {value.title}
              </th>
            ))}
          </tr>

          </thead>

          <tbody>
          {sortedProducts.map((product) => (
            <ProductsItem product={product} key={product.id}/>
          ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsTable;

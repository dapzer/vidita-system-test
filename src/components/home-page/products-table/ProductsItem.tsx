import React, { FC, useEffect, useState } from 'react';
import { Product } from "../../../types/Product";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changeProductSelectedStatus } from "../../../redux/features/products/productsSlice";
import styles from "./products-table.module.scss"
import UiCheckbox from "../../ui/checkbox/UiCheckbox";
import { toCurrency } from "../../../utils/toCurrency.helper";

interface Props {
  product: Product
}

const ProductsItem: FC<Props> = ({product}) => {
  const dispatch = useAppDispatch()
  const [isChecked, setIsChecked] = useState(false)
  const selectedProducts = useAppSelector((state) => state.products.selectedProducts)

  useEffect(() => {
    if (selectedProducts.includes(product.id)) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [selectedProducts])

  const handleChecked = () => {
    dispatch(changeProductSelectedStatus({selected: isChecked, id: product.id}))
  }

  return (
    <tr>
      <td>
        <UiCheckbox checkedStatus={isChecked} changeChecked={handleChecked} />
      </td>
      <td>{product.status}</td>
      <td>{product.sum}</td>
      <td>{product.qty}</td>
      <td>{product.volume}</td>
      <td>{product.name}</td>
      <td>{new Date(product.delivery_date).toLocaleDateString()}</td>
      <td>{product.currency}</td>
      <td>{toCurrency(product.total_sum!, product.currency, "ru")}</td>
    </tr>
  );
};

export default ProductsItem;

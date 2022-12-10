import React, { FC } from 'react';
import UiPrompt from "../../ui/prompt/UiPrompt";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { postCancelProduct } from "../../../redux/features/products/productsThunk";
import { Product } from "../../../types/Product";

interface Props {

}

const CancelProducts: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const {selectedProducts, baseProducts} = useAppSelector(state => state.products)
  const cancelProducts = () => {
    dispatch(postCancelProduct(selectedProducts))
  }

  return (
    <>
      {selectedProducts.length > 0 && (
        <UiPrompt title={"Вы уверены что хотите аннулировать товар(ы)"} callBack={cancelProducts}>
          <ul>
            {selectedProducts.map((el) => (
              <li key={`seleted-ids-${el}`}>{baseProducts[baseProducts.findIndex((value) => value.id === el)].name}</li>
            ))}
          </ul>
        </UiPrompt>
      )}
    </>
  )
};

export default CancelProducts;

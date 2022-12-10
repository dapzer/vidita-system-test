import React, { FC } from 'react';
import { useAppSelector } from "../../../redux/hooks";
import styles from "./footer.module.scss"

interface Props {

}

const Footer: FC<Props> = () => {
  const { totalVolume, totalQty } = useAppSelector(state => state.products)
  return (
    <footer className={styles['body']}>
      <div className={'container'}>
        <ul>
          <li>
            Created by: <span>Danila Voronkov</span>
          </li>
          <li>
            Общий обьем: <span>{totalVolume.toFixed(1)}</span>
          </li>
          <li>
            Общее количество: <span>{totalQty.toFixed(1)}</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

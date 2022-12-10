import React, { FC } from 'react';
import styles from "./ui-checkbox.module.scss";

interface Props {
  checkedStatus: boolean
  changeChecked: () => void
}

const UiCheckbox: FC<Props> = ({checkedStatus, changeChecked}) => {
  return (
    <div className={styles['body']} onClick={changeChecked}>
      <input type="checkbox" name="checkbox" checked={checkedStatus} readOnly />
      <label htmlFor="checkbox"></label>
    </div>
  );
};

export default UiCheckbox;

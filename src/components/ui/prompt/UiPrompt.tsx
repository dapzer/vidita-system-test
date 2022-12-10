import React, { FC, useState } from 'react';
import UiPromptContent from "./UiPromptContent";
import styles from "./ui-prompt.module.scss"

interface Props {
  title: string
  children: React.ReactNode
  callBack: () => void
}

const UiPrompt: FC<Props> = ({ title, children, callBack }) => {
  const [visible, setVisible ] = useState(false)

  const confirm = () => {
    callBack()
    setVisible(false)
  }


  return (
      <div className={styles['prompt']}>
        <button onClick={() => setVisible(true)}>{title}</button>
        {visible && (
          <UiPromptContent handleVisible={setVisible} title={"Аннулировать"} maxWidth={500}>
            {children}
            <div className={styles['buttons']}>
              <button className={styles['confirm']} onClick={confirm}>Подтвердить</button>
              <button className={styles['cancel']} onClick={() => setVisible(false)}>Отменить</button>
            </div>
          </UiPromptContent>
        )}
      </div>
  );
};

export default UiPrompt;

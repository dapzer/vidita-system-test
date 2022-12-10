import React, { FC } from 'react';
import Link from 'next/link';

interface Props {

}

const Header: FC<Props> = () => {
  return (
      <>
        <Link href={'/'}>
          Главная
        </Link>
      </>
  );
}
;

export default Header;

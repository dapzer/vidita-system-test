import React, { FC, useEffect } from 'react';
import Header from './Header';
import { useAppDispatch } from "../../redux/hooks";
import { fetchAllProducts } from "../../redux/features/products/productsThunk";
import Footer from "./footer/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts("documentsFirst"))
    dispatch(fetchAllProducts("documentsSecond"))
  }, [])

  return (
    <div className={'layout container'}>
      <header>
        <Header/>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

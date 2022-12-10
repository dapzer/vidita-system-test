import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch } from "../../../redux/hooks";
import { tableFields } from "../tableFields";
import styles from "./search.module.scss"
import { searchByField } from "../../../redux/features/products/productsSlice";

interface Props {

}

const Search: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const [selectedField, setSelectedField] = useState("")
  const [searchTern, setSearchTern] = useState("")

  useEffect(() => {
    if (selectedField === "") return
    dispatch(searchByField({ field: selectedField, value: searchTern }))
  }, [searchTern])

  const changeStatus = (value: string) => {
    setSelectedField(value)
    setSearchTern("")
  }

  return (
    <div className={styles["body"]}>
      <select onChange={(e) => changeStatus(e.target.value)}>
        <option  value={""}>Выберите колонку</option>
        {tableFields.map((el, index) => (
          <option key={index} value={el.value}>{el.title}</option>
        ))}
      </select>
      <input disabled={selectedField === ""} type="text" onChange={(e) => setSearchTern(e.target.value)} value={searchTern} placeholder="Поиск" />
    </div>
  );
};

export default Search;

import React from "react";
import Select from "react-select";
import { StyledCustomSelect } from "./styles/CustomSelect.style";
import { useGlobalContext } from "../context";

const options = [
  { value: "priceAsc", label: "Preço Crescente" },
  { value: "priceDes", label: "Preço Decrescente" },
  { value: "scoreAsc", label: "Popularidade(Score) Crescente" },
  { value: "scoreDes", label: "Popularidade(Score) Decrescente" },
  { value: "alphabetAtoZ", label: "A-Z" },
  { value: "alphabetZtoA", label: "Z-A" },
];

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    color: state.isFocused ? "#140853 " : "black",
    backgroundColor: state.isFocused ? "#8256d5 " : "white",
  }),
};

const CustomSelect = () => {
  const { handleChange } = useGlobalContext();

  return (
    <StyledCustomSelect>
      <Select
        options={options}
        isSearchable={false}
        placeholder="Selecione..."
        styles={styles}
        onChange={handleChange}
      ></Select>
    </StyledCustomSelect>
  );
};

export default CustomSelect;

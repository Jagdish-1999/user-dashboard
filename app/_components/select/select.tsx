import React, { useState, useEffect, ChangeEvent, useCallback } from "react";
import {
  CustomSelectContainer,
  SelectElement,
  SelectItems,
  SelectSelected,
} from "./styled.select";

interface SelectProps<T> {
  name: string;
  options: T[];
  onChange?(option: T): void;
}

const Select = <T extends { id: string; value: string }>({
  name,
  options,
  onChange,
}: SelectProps<T>) => {
  const [selectedOption, setSelectedOption] = useState<T>(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // console.log("option", selectedOption);
  const handleSelect = useCallback((option: T) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.target.closest(".custom-select")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    onChange?.(selectedOption);
  }, [onChange, selectedOption]);

  return (
    <CustomSelectContainer className="custom-select">
      <SelectElement name={name}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </SelectElement>
      <SelectSelected
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={isDropdownOpen ? "select-arrow-active" : ""}
      >
        {selectedOption.value}
      </SelectSelected>
      <SelectItems show={isDropdownOpen} className="custom-scrollbar">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => handleSelect(option)}
            className={
              selectedOption.id === option.id ? "same-as-selected" : ""
            }
          >
            {option.value}
          </div>
        ))}
      </SelectItems>
    </CustomSelectContainer>
  );
};

export { Select };

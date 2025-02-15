import React, { useState } from 'react';
import styled from 'styled-components';

interface FilterComboBoxProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const FilterComboBox: React.FC<FilterComboBoxProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div>
      <FakeBox>
        <Select value={selectedOption} onChange={handleChange} >

          {/* <option value="" disabled>Select an option</option> */}
          {options.map((option, index) => (
            <OptionTest key={index} value={option}>
              {option}
            </OptionTest>
          ))}
        </Select>
      </FakeBox>
    </div>
  );
};

export default FilterComboBox;

const OptionTest = styled.option`
  /* width: 100px !important; */
`
const Select = styled.select`
  width: 100%;
  height: 100%;
  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;

  margin: 0;
  padding: 0;
`
const FakeBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 120px;
  height: 48px;
  margin: 0;
  padding: 0;
  
  background-color: var(--main-color);
`
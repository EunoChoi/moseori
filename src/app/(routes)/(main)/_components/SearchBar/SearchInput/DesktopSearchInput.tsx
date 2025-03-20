import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface DesktopSearchInputProps {
  searchInput: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DesktopSearchInput = ({ searchInput, onChange, onSubmit }: DesktopSearchInputProps) => {
  return (
    <WrapperForm>
      <SearchInputForm
        type='text'
        value={searchInput}
        onChange={onChange}
        placeholder='모집 공고 검색'
      />
      <SearchButton
        type='submit'
        onClick={onSubmit}
      >
        <SearchRoundedIcon className='icon' fontSize='inherit' color='inherit' />
      </SearchButton>
    </WrapperForm>
  );
};

export default DesktopSearchInput;

const WrapperForm = styled.form`
  height: 100%;
  width: auto;
  
  height: 42px;
  border-radius: 16px;
  background-color: var(--main-3);
  border: 1px solid var(--main-1);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding-left: 14px;
  gap: 6px;

  .icon{
    color: var(--grey0);
    font-size: 18px;
  }
`
const SearchInputForm = styled.input`
  border: none;
  outline: none;

  display: inline;
  width: 200px;

  font-size: 15px;
  font-weight: 500;
  color: var(--grey0);

  background-color: rgba(0,0,0,0);

  &::placeholder{
    color: darkgray;
  }
`
const SearchButton = styled.button`
  display: flex;
  justify-content : center;
  align-items : center;

  height: 100%;
  padding: 0 14px;
`
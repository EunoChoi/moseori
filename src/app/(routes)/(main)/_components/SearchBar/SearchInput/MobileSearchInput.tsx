import MobileSearchInputModal from '@/app/(routes)/(main)/_components/SearchBar/SearchInput/MobileSearchInputModal';
import { TransitionContainer, useMountTransition } from '@/common/hooks/useMountTransition';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface MobileSearchInputProps {
  searchInput: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  searchHistory: string[];
  setSearchHistory: (value: string[]) => void;
}


const MobileSearchInput = ({ searchInput, onChange, onSubmit, searchHistory, setSearchHistory }: MobileSearchInputProps) => {
  const { isMount: isMobileSearchMount,
    setIsMount: setIsMobileSearchMount,
    onToggle: onToggleMobileSearch,
    onClose: onCloseMobileSearch,
    transitionPhase: MobileSearchTransitionPhase } = useMountTransition({ defaultState: 'unmount' });

  return (
    <>
      <SearchButton onClick={onToggleMobileSearch}>
        <SearchRoundedIcon className='icon' fontSize='inherit' color='inherit' />
      </SearchButton>
      <TransitionContainer
        portalBody={true}
        duration={300}
        isMount={isMobileSearchMount}
        setIsMount={setIsMobileSearchMount}
        transitionPhase={MobileSearchTransitionPhase}
      >
        <MobileSearchInputModal
          onSubmit={onSubmit}
          searchInput={searchInput}
          onChange={onChange}
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
          isOpen={isMobileSearchMount}
          onClose={onCloseMobileSearch} />
      </TransitionContainer>
    </>
  );
};

export default MobileSearchInput;

const SearchButton = styled.div`
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
  gap: 6px;
  padding: 0 18px;

  .icon{
    color: var(--grey0);
    font-size: 18px;
  }
`
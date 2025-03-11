import { TransitionContainer, useMountTransition } from '@/common/hooks/useMountTransition_fix';
import { OptionsType } from '@/common/type/selectType';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';
import BottomButton from './BottomButton';
import OptionList from './OptionList';
import SelectedValue from './SelectedValue';


interface SelectProps {
  className?: string;
  multiple?: boolean;
  name: string;

  options: OptionsType;
  value: number[];
  setValue: Dispatch<SetStateAction<number[]>>;
}

const Select = ({
  className,
  multiple,
  name,
  options,
  value,
  setValue,
}: SelectProps) => {
  const isMultiple = multiple === true;
  const optionWrapperRef = useRef<HTMLDivElement>(null);
  const { isMount: isOptionListMount,
    setIsMount: setIsOptionListMount,
    onToggle: onToggleOptionList,
    onClose: onCloseOptionList,
    transitionPhase: optionListTransitionPhase } = useMountTransition({ defaultState: 'unmount' });

  //focus action for blur action
  useEffect(() => {
    if (isOptionListMount) {
      optionWrapperRef.current?.focus();
    }
  }, [isOptionListMount]);

  return (
    <Wrapper className={className}>
      <SelectedValue
        name={name}
        options={options}
        value={value}
        multiple={isMultiple}

        onToggleOptionList={onToggleOptionList}
        isOptionListOpen={isOptionListMount}
      />
      <TransitionContainer
        duration={300}
        isMount={isOptionListMount}
        setIsMount={setIsOptionListMount}
        transitionPhase={optionListTransitionPhase}
      >
        <OptionWrapper
          ref={optionWrapperRef}
          tabIndex={-1}
          onBlur={onCloseOptionList}
        >
          <OptionList
            multiple={isMultiple}
            options={options}
            value={value}
            setValue={setValue}
          />
          <BottomButton
            options={options}
            setValue={setValue}
            multiple={isMultiple} />
        </OptionWrapper>
      </TransitionContainer>
    </Wrapper>
  );
};


export default Select;

const Wrapper = styled.div`
  position: relative;
  display : flex;
  flex-direction: column;
  align-items: center;

  //default widht, height
  width: 200px;
  height: 100%;
`
const OptionWrapper = styled.div`
  width: 200px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;


  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(calc(-50%));
  margin-top: 12px;

  background-color: white;
  border-radius: 16px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);


  &:focus {
    outline: none;
  }
  &::before {
    content: '';
    position: absolute;
    top: -10px; /* 상단 위치 조절 */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ddd; /* 테두리 색상 */
  }
  &::after {
    content: '';
    position: absolute;
    top: -9px; /* 테두리 두께(2px)만큼 조정 */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white; 
  }
`
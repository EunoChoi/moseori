'use client'


import '@/common/styles/datepicker-custom.css';
import { format } from 'date-fns';
import { ko } from "date-fns/locale";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";


export const PostDateForm = () => {


  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  const startDateString = startDate ? format(startDate, 'yyyy-MM-dd') : '';
  const endDatString = endDate ? format(endDate, 'yyyy-MM-dd') : '';

  console.log(dateRange);

  const [selectedDate, setSelectedDate] = useState(null);
  const [tempDate, setTempDate] = useState(selectedDate);
  const datePickerRef = useRef<DatePicker>(null);
  // 확인 버튼 클릭 시
  const handleConfirm = () => {
    setSelectedDate(tempDate);
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(false);
    }
  };

  // 취소 버튼 클릭 시
  const handleCancel = () => {
    setTempDate(selectedDate); // 기존 선택값 복원
    console.log('close')
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(false);
    }
  };



  return (
    <Wrapper>
      <DatePicker
        ref={datePickerRef}
        selectsRange
        locale={ko}
        shouldCloseOnSelect={false}
        popperProps={{ strategy: 'fixed' }}
        disabledKeyboardNavigation

        // 커스텀 인풋 버튼도 따로 컴포넌트 분리해서 처리하자
        customInput={<DatePickerButton
          type='button'
        >
          <span className='start'>{startDateString}</span>
          <span className='bar'>~</span>
          <span className='end'>{endDatString}</span>
        </DatePickerButton>}

        dateFormat="yyyy-MM-dd"


        startDate={startDate}
        endDate={endDate}
        onMonthChange={() => { setDateRange([null, null]) }}
        onChange={(update) => {
          setDateRange(update as [Date | null, Date | null]);
        }}
      >
        <>
          <button type='button'>취소</button>
          <button type='button'>확인</button>
        </>
      </DatePicker>

    </Wrapper>
  );
}

const DatePickerButton = styled.button`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  color: black;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;

  /* background-color: red; */
  
  span{
    width: auto;
    height: 100%;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`
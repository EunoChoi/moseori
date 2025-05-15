import styled from 'styled-components';
import ZoomPostButton from './ZoomPostButton';
// import SendIcon from '@mui/icons-material/Send';


const dummyPostData = {
  title: '인스타브레인',
  author: '안데르스 한센',
  publisher: '동양북스',
  category: '자기계발',
  tags: ['태그1', '태그2', '태그3'],
  dates: {
    start: '2023-10-01',
    end: '2023-10-31',
  },
  link: 'https://example.com',
  images: {
    thumbnail: 'https://via.placeholder.com/150',
    image1: 'https://via.placeholder.com/300',
    image2: 'https://via.placeholder.com/300',
  },
  content: '어쩌구 저쩌구 모집 공고 내용 어쩌구 저쩌구 모집 공고 내용 어쩌구 저쩌구 모집 공고 내용 어쩌구 저쩌구 모집 공고 내용 어쩌구 저쩌구 모집 공고 내용',
  interaction: {
    like: 0,
    comment: 0,
  }
}

const ZoomPostContent = () => {
  return (
    <Wrapper>
      <TextInfoWrapper>
        <Title>{dummyPostData.title}</Title>
        <Tags>
          <span>#{dummyPostData.category}</span>
          <span>#{dummyPostData.author}</span>
          <span>#{dummyPostData.publisher}</span>
        </Tags>
        <Content>{dummyPostData.content}</Content>
        <MoreInfo>
          <span>모집 기간 : {dummyPostData.dates.start} ~ {dummyPostData.dates.end}</span>
          <span>링크 : {dummyPostData.link}</span>
        </MoreInfo>
      </TextInfoWrapper>
      <ZoomPostButton />
    </Wrapper>
  );
}

export default ZoomPostContent;

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  @media (min-width:1024px) { //desktop
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    overflow: scroll;
  }
`
const TextInfoWrapper = styled.div`
  width: 100%;
  height: auto;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  padding: 24px 16px;
  gap: 24px;
`
const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
`
const Tags = styled.div`
  display: flex;
  gap: 10px;

  font-size: 18px;
  font-weight: 500;
  color: var(--main-0);
  filter: brightness(0.9);
`
const Content = styled.div`
  font-size: 18px;
`
const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const InteractionButtons = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 16px;

  .buttonWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`
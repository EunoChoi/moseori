import PostCard from '@/common/components/PostCard';
import styled from 'styled-components';

const Posts = () => {
  return (
    <Wrapper>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </Wrapper>
  );
};

export default Posts;

const Wrapper = styled.div`
  width: 100dvw;
  height: auto;

  @media (max-width: 640px) { //mobile port
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;

    padding: 4px 3dvw;
    padding-bottom: 48px;
    gap: 8px;
  }
  @media (min-width:641px)  { 
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 290px);
    grid-template-rows: auto;

    padding: 12px 3dvw;
    padding-bottom: 48px;
    gap: 16px;
  }
`

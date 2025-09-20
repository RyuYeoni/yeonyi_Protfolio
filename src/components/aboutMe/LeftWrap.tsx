import tw from "tailwind-styled-components";
import TagText from "../atoms/tag/TagTxt";
import { aboutMetags } from "../../data/content/aboutmeData";

const LeftContainer = tw.div`
  flex
  flex-col
  gap-10
  justify-center
  items-center
  flex-2
`;

const Img = tw.img`
  max-md:w-[60vw]
`;

const FlexBox = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-1
`;


const TagTxtWrap = tw.div`
  flex
  gap-1
`;

const LeftWrap = () => {
  return (
    <LeftContainer>
      <FlexBox>
        <Img src="/images/yeoni_im.webp" loading='lazy' alt="emoji image" />
        <TagTxtWrap>
          {aboutMetags.map((tag, idx) => (
            <TagText key={idx} tag={tag.name} />
          ))}
        </TagTxtWrap>
      </FlexBox>
      {/* <ShowReviewBtn handelImgChange={handelImgChange}>팀원 리뷰 보기</ShowReviewBtn> */}
    </LeftContainer>
  );
};

export default LeftWrap;
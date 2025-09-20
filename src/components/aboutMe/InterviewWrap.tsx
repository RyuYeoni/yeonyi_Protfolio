import tw from "tailwind-styled-components";
import PointText from "../atoms/text/PointText";
import BoldText from "../atoms/text/BoldText";

const RightContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;

const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

const MyMindTxt = tw.div`
  relative
  text-base
  mb-5
  bg-lightGray
  p-5
  rounded-tl-2xl
  rounded-tr-2xl  
  rounded-bl-2xl
`;

const InterviewWrap = () => {
  return (
    <RightContainer>
      <MyMind>
        <Tit>Interview</Tit>
        <MyMindTxt>
          <SubTit>Q. What kind of developer are you?</SubTit>
          I am an <PointText>Android developer</PointText> who values <BoldText>practical problem solving, continuous learning, and teamwork</BoldText>. 
          I focus on solving real-world problems by improving <BoldText>usability, efficiency, and user satisfaction</BoldText>.  
          Every project is an opportunity to deliver solutions that are not only functional but also meaningful to users.
          <br/>Through personal and team projects, I apply a <PointText>full-stack perspective</PointText> to turn ideas into tangible results.<br />
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. What is the most important value in development?</SubTit>
          <PointText>Collaboration and communication</PointText> are key to delivering impactful solutions. I believe that smooth teamwork and meaningful interaction with users ensure that ideas are effectively implemented. 
          <br/>I actively share and refine ideas with my team to create the best possible outcome.<br/>
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. What efforts are you making to improve yourself?</SubTit>
           I continuously expand my skills and knowledge to stay adaptable and effective. By engaging in projects and continuous study of new technologies, I strengthen my ability to solve real-world problems. 
           <PointText>Lifelong learning and project-based practice</PointText> are central to my growth as an Android Developer.
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;
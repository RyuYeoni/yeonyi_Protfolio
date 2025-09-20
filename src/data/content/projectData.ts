import { project1 } from './projecsDetailDatas/project1';
import { project2 } from './projecsDetailDatas/project2';
import { project3 } from './projecsDetailDatas/project3';

export const projectData = [

  {
    name: project1.name,
    type: 'team',
    title: project1.title,
    subject: 'An application that helps communication between the younger and older generations',
    tag: project1.tag,
    imgurl: project1.imgurl,
    giturl: project1.giturl,
    depoloyurl: project1.depoloyurl,
  },
  {
    name: project2.name,
    type: 'team',
    title: project2.title,
    subject: 'A diet supporter that provides personalized meal plans',
    imgurl: project2.imgurl,
    giturl: project2.giturl,
    tag: project2.tag,
    depoloyurl: project2.depoloyurl,
  },
  {
    name: project3.name,
    type: 'team',
    title: project3.title,
    subject: 'A smart budget management app focused on expense tracking',
    tag: project3.tag,
    imgurl: project3.imgurl,
  },
];

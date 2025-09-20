export const project2 = {
  name: 'Diet Chef',
  pointcolor: 'before:bg-[#FCA311]',
  title: 'Diet Chef',
  imgurl: "/images/thumbnail_dietchef.webp", 
  subtext:
  'A web application that recommends personalized meal plans based on user\'s physical data, activity level, and goals (weight loss/maintenance/gain). Provides automatic meal recommendations, manual meal input, and nutritional intake statistics visualization features.\n\nKey features include user management system, personalized meal recommendations, food information search, and recipe book management functionality.',
  data: '2025.04-2025.06',
  team: '60% Contribution',
  tag: ['Web Application', 'React'],

  detailimginfo: [
    {
      imgurl: "/images/project_dietchef1.webp", 
      subject: 'Main Page',
    },
    {
      imgurl: "/images/project_dietchef2.webp", 
      subject: 'Login/Sign Up',
    },
    {
      imgurl: "/images/project_dietchef3.webp", 
      subject: 'Personalized Meal Recommendations',
    },
    {
      imgurl: "/images/project_dietchef4.webp", 
      subject: 'Saved Recipe Viewing & Management Page',
    },
    {
      imgurl: "/images/project_dietchef5.webp", 
      subject: 'Recipe Detail View',
    },
    {
      imgurl: "/images/project_dietchef6.webp", 
      subject: 'Food Information Detail Page',
    },
  ],
  giturl: 'https://github.com/RyuYeoni/DietChef',
  depoloyurl: 'https://youtu.be/MNkuW48aass?si=sfQoV9r_NnbA5fs5',

  tools: [
  {
  title: 'React',
  detail: 'Built component-based user interfaces using React and implemented state management and lifecycle management using Hooks.',
  },
  {
  title: 'Firebase Realtime Database',
  detail: 'Implemented real-time synchronization of user data, meal information, and recipe data along with cloud-based data management using Firebase Realtime Database.',
  },
  {
  title: 'Firebase Authentication',
  detail: 'Implemented Google OAuth login through Firebase Authentication and built a system for real-time user authentication state management.',
  },
  {
  title: 'Unsplash API',
  detail: 'Integrated Unsplash API to dynamically fetch food images and implemented fallback processing with emojis when API calls fail.',
  },
  ],
  featinfo: ['Google OAuth Login', 'BMI-based Meal Recommendations', 'Food Search & Nutritional Info', 'Personal Recipe Book', 'User Profile Management', 'Diet Management Tracking'],
  parts: [
  {
    title: 'Social Login System Using Firebase Authentication',
    detailList: [
      'Implemented simple login functionality through Google OAuth and automatic differentiation between new/existing users',
      'Automated real-time authentication state detection and page routing using onAuthStateChanged',
      'Implemented user progress tracking and back navigation prevention using SessionStorage',
      ],
    },
  {
    title: 'Efficient State Management Using React Hooks',
    detailList: [
      'Built complex form data management system combining useState, useEffect, and useCallback Hooks',
      'Implemented conditional page routing and user flow control using useNavigate Hook',
      'Prevented memory leaks through event listener cleanup during component unmounting',
      ],
    },
  {
  title: 'Firebase Realtime Database Real-time Data Synchronization',
    detailList: [
      'Implemented CRUD operations and real-time data updates using ref, get, set, remove functions',
      'Enhanced data isolation and security through user-specific individual database path design',
      'Implemented consistent daily meal recommendation system through date-based hash algorithm',
      ],
    },
  {
  title: 'External API Integration and Error Handling',
    detailList: [
      'Implemented dynamic image loading functionality through Unsplash API',
      'Enhanced user experience through emoji fallback processing when API calls fail',
      'Systematic error handling using try-catch statements',
      ],
    },
  {
  title: 'Interaction Design for User Experience Optimization',
    detailList: [
      'Prevented page leaving and data loss using beforeunload event',
      'Controlled event bubbling and prevented unintended actions through stopPropagation',
      'Provided clear progress feedback to users through loading state management',
      ],
    },
  {
  title: 'Personalized Meal Recommendations Using BMI-based Algorithm',
    detailList: [
      'Implemented user body type analysis through BMI calculation and classification algorithm',
      'Created customized meal category system with 18 different cases combining exercise level, goals, and BMI',
      'Implemented consistent daily meal recommendation logic through date-based hash function',
      ],
    },
  ],

  insight: [
  {
    title: 'Future Improvement and Expansion Plans',
    detailList: [
      'Support for various login methods: Plan to expand from current Google OAuth only to email/password registration and other social logins like Facebook',
      'Advanced meal recommendation using AI APIs: Plan to build more diverse and personalized meal recommendation system by integrating AI or specialized nutrition APIs',
      'Community feature addition: Plan to develop social features for sharing diet experiences, meal reviews, and motivation among users',
      ],
    },
  ],
};
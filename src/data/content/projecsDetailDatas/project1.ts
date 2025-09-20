export const project1 = {
  name: 'MZ Bridge',
  pointcolor: 'before:bg-[#C197D2]',
  title: 'MZ Bridge',
  imgurl: "/images/thumbnail_mz.webp",
  subtext:
    'An app designed to facilitate smooth communication between the MZ generation and older generations, aiming to resolve intergenerational conflicts. It promotes mutual understanding through MZ culture and slang introductions, MZ knowledge quizzes, and provides an active intergenerational exchange environment through discussion forums.\n\nKey features include a generational language translator, MZ culture & slang introduction pages, MZ knowledge quizzes, intergenerational discussion forums, MZ consumption trend analysis, and older generation culture introduction pages.',
  data: '2025.03-2025.06',
  team: '75% Contribution',
  tag: ['Mobile App', 'Android'],

  detailimginfo: [
    // {
    //   imgurl: "/images/project_mz1.webp", 
    //   subject: 'At a Glance',
    // },
    {
      imgurl: "/images/project_mz2.webp", 
      subject: 'MZ Memes & Culture Introduction Page',
    },
    {
      imgurl: "/images/project_mz3.webp", 
      subject: 'MZ Culture Detail Page',
    },
    {
      imgurl: "/images/project_mz4.webp", 
      subject: 'User-Submitted Information',
    },
    {
      imgurl: "/images/project_mz5.webp", 
      subject: 'Meme & Slang Quiz',
    },
    {
      imgurl: "/images/project_mz6.webp", 
      subject: 'Older Generation Introduction Page',
    },
    {
      imgurl: "/images/project_mz7.webp", 
      subject: 'Content Details',
    },
  ],
  giturl: 'https://github.com/RyuYeoni/MZ_Theseday',
  depoloyurl: 'https://youtu.be/fZdTGgYnj10',

  tools: [
    {
      title: 'Kotlin',
      detail: 'Used Kotlin for Android native app development to implement core app features with concise and safe code.',
    },
    {
      title: 'Android Studio',
      detail: 'Systematically developed the entire project structure and UI components in the Android native app development environment.',
    },
    {
      title: 'Firebase',
      detail: 'Implemented real-time data synchronization and cloud-based data management using Firebase Realtime Database.',
    },
    {
      title: 'XML Layout',
      detail: 'Implemented user-friendly UI/UX design through Android XML and designed responsive layouts that adapt to various screen sizes.',
    },
  ],
  featinfo: ['MZ Culture & Slang Introduction', 'MZ Knowledge Quiz System', 'Intergenerational Discussion Forum', 'Older Generation Culture Introduction', 'Consumption Trend Analysis', 'Generational Language Translator'],
  parts: [
    {
      title: 'Efficient Data Display Using RecyclerView',
      detailList: [
        'Implemented MZ memes and slang lists with RecyclerView, optimizing for smooth scrolling even with large datasets',
        'Minimized memory usage and improved app performance through ViewHolder pattern implementation',
      ],
    },
    {
      title: 'Real-time Data Management System with Firebase',
      detailList: [
        'Built Firebase Database infrastructure to load MZ culture content and quiz data in real-time',
      ],
    },
    {
      title: 'MZ Knowledge Quiz System Development',
      detailList: [
        'Implemented an interactive quiz system that measures users\' understanding of MZ culture',
        'Calculated individual MZ scores through scoring algorithms and provided visual results',
      ],
    },
    {
      title: 'Intuitive UI/UX Design Implementation',
      detailList: [
        'Designed clean and modern interfaces by combining CardView and LinearLayout',
        'Applied a consistent design language with a light purple color theme',
      ],
    },
    {
      title: 'Content Navigation Optimization with HorizontalScrollView',
      detailList: [
        'Arranged popular meme content in horizontal scrolling layout for effective exploration of diverse information on a single screen',
        'Designed intuitive navigation structure considering user experience',
      ],
    },
    {
      title: 'Cross-Cultural Content Page Connection Features',
      detailList: [
        'Implemented "Time Travel" button functionality connecting MZ culture introduction pages with older generation culture pages',
        'Designed navigation structure allowing users to easily compare and explore both generational cultures',
      ],
    },
    {
      title: 'Complex Screen Composition Using NestedScrollView',
      detailList: [
        'Implemented natural scrolling across various content areas on a single screen using NestedScrollView',
        'Enhanced usability by efficiently arranging multiple features including quizzes, meme introductions, and reporting functions',
      ],
    },
  ],
  insight: [
  {
    title: 'Future Improvement and Expansion Plans',
    detailList: [
      'Introduction of community features in detail pages: Adding community functions (likes, comments) to content introduction detail pages'
      ]
    },
  ],
};
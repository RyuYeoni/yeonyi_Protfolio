export const project3 = {
  name: 'coin:nect',
  pointcolor: 'before:bg-[#4CAF50]',
  title: 'Coin : nect',
  imgurl: "/images/thumbnail_hh.webp",
  subtext:
  'A smart household budget application that combines the meaning of coin (currency) + connect (connection), aiming for systematic household management through budget control. Provides calendar-based income/expense recording, statistical visualization, budget management and analysis features.\n\nThe key differentiator is its focus on improving users\' spending patterns through monthly budget setting and real-time analysis, going beyond simple record-keeping.',
  data: '2024.12-Ongoing',
  team: '30% Contribution (Backend Specialist)',
  tag: ['Backend API', 'Spring Boot'],
  status: 'upcoming',
  detailimginfo: [
    {
      imgurl: "/images/project_hh1.webp", 
      subject: 'Calendar Page',
    },
    {
      imgurl: "/images/project_hh2.webp", 
      subject: 'Income/Expense Input',
    },
    {
      imgurl: "/images/project_hh3.webp", 
      subject: 'Income/Expense Transaction List',
    },
    {
      imgurl: "/images/project_hh4.webp", 
      subject: 'Transaction History Keyword Search',
    },
    {
      imgurl: "/images/project_hh5.webp", 
      subject: 'Budget Management Page',
    },
    {
      imgurl: "/images/project_hh6.webp", 
      subject: 'Budget Setting Page',
    },
  ],
  giturl: '',
  depoloyurl: '',
  featinfo: ['Calendar-based Income/Expense Management', 
    'Budget Setting & Monitoring', 
    'Spending Pattern Analysis & Alerts', 
    'Category-based Statistical Visualization', 
    'Transaction History Search & Filtering'],
  tools: [
    {
    title: 'Spring Boot',
    detail: 'Designed RESTful APIs using Spring Boot framework and built an efficient backend system through dependency injection and auto-configuration.',
    },
    {
    title: 'Java',
    detail: 'Implemented service logic following object-oriented programming principles using Java, and applied functional programming techniques utilizing Stream API and Optional.',
    },
    {
    title: 'Maven',
    detail: 'Implemented project dependency management and build automation through Maven, systematizing library version management and packaging processes.',
    },
    {
    title: 'Postman',
    detail: 'Performed functional verification and performance testing for each API endpoint using Postman, facilitating smooth collaboration with the frontend team through systematic API documentation.',
    },
    {
    title: 'MySQL',
    detail: 'Designed databases using MySQL and managed data by writing efficient queries.',
    },
  ],
  parts: [
    {
    title: 'RESTful API Design and Implementation',
    detailList: [
      'Clear role separation by HTTP method using @GetMapping, @PostMapping, @PutMapping, @DeleteMapping annotations',
      'Standardized communication with clients through consistent response format (success, code, message, data)'
      ],
    },
    {
    title: 'Spring Boot Dependency Injection and Layer Separation',
    detailList: [
      'Clear separation of business logic and data access layers using @Service, @Repository annotations',
      'Reduced coupling between objects and improved testability through dependency injection via @Autowired',
      'Ensured maintainability and extensibility by applying single responsibility principle across service layers',
      ],
    },
    {
    title: 'Budget Analysis Algorithm Development',
      detailList: [
      'Implemented monthly budget change rate calculation logic and category-wise spending variation analysis algorithms',
      'Developed surge/decline detection through spending pattern analysis and personalized warning message generation',
      'Provided budget vs. actual spending ratio calculation and user-specific personalized consumption analysis feedback',
      ],
    },
    {
    title: 'Integrated Transaction History Search System',
      detailList: [
      'Implemented keyword-based search functionality by integrating income and expense data',
      'Built date-ordered sorting using Comparator and data transformation pipeline through Stream',
      'Handled multi-condition search for title and memo fields with type-specific (income/expense) differentiation processing',
      ],
    },
    ],
    insight: [
    {
      title: 'Future Improvement and Expansion Plans',
        detailList: [
        'Weekly budget management: Plan to develop more sophisticated expense management features by subdividing current monthly budgets into weekly units',
        'User group analysis: Addition of personalized spending habit improvement suggestions through comparative analysis of consumption patterns among users of similar age groups',
        'Predictive algorithm implementation: Building future spending prediction and budget recommendation systems based on past consumption patterns',
        ]
      },
    ],
};

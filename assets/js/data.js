// Life Advice Guide - Comprehensive Content Data (11 Categories)
const adviceData = {
  'mental-health': {
    title: 'Mental Health & Emotional Well-Being',
    emoji: '🧠',
    color: '#D4E8E8',
    description: 'Manage stress, anxiety, and emotional challenges with practical strategies.',
    advice: [
      {
        id: 1,
        title: 'Managing Anxiety Attacks',
        problem: 'Experiencing panic or anxiety episodes',
        description: 'Anxiety attacks can feel overwhelming, but manageable with techniques.',
        steps: [
          'Recognize the anxiety signs early (racing heart, tension)',
          'Practice 5-4-3-2-1 grounding: 5 see, 4 hear, 3 feel, 2 smell, 1 taste',
          'Use box breathing: inhale 4, hold 4, exhale 4, hold 4',
          'Move your body - walk, stretch, or exercise lightly',
          'Talk to someone or write down your thoughts'
        ],
        reflection: 'What triggers your anxiety? How can you prepare?',
        quote: '"Anxiety is temporary, you are permanent." - Unknown'
      },
      {
        id: 2,
        title: 'Overcoming Overthinking',
        problem: 'Stuck in endless thought loops',
        description: 'Overthinking drains mental energy. Redirect your thoughts.',
        steps: [
          'Notice when you\'re spiraling - label it',
          'Set a 10-minute worry timer, then move on',
          'Ask: "Is this thought helping me right now?"',
          'Redirect to present-moment activities',
          'Keep a worry journal to track patterns'
        ],
        reflection: 'What worries consume most of your mental energy?',
        quote: '"Be present in all things." - Unknown'
      },
      {
        id: 3,
        title: 'Building Emotional Resilience',
        problem: 'Struggling to bounce back from difficulties',
        description: 'Resilience is a skill you can develop through practice.',
        steps: [
          'Practice self-compassion when facing setbacks',
          'Build a strong support network',
          'Develop a growth mindset',
          'Maintain healthy lifestyle habits',
          'Journal about difficulties you\'ve overcome'
        ],
        reflection: 'What past challenges made you stronger?',
        quote: '"The flower that blooms in adversity is rarest." - Mulan'
      },
      {
        id: 4,
        title: 'Combating Burnout',
        problem: 'Feeling exhausted mentally and physically',
        description: 'Burnout means your needs aren\'t being met. Recovery requires rest.',
        steps: [
          'Recognize burnout signs: exhaustion, cynicism',
          'Take time off - vacation or mental health days',
          'Reassess priorities and drop non-essentials',
          'Establish boundaries between work and personal time',
          'Engage in activities purely for joy'
        ],
        reflection: 'What areas of your life are causing the most drain?',
        quote: '"Rest is productive." - Unknown'
      },
      {
        id: 5,
        title: 'Establishing Self-Care Routines',
        problem: 'Neglecting your own wellbeing',
        description: 'Self-care is essential maintenance for your mental health.',
        steps: [
          'Identify what truly fills your cup',
          'Schedule self-care like appointments',
          'Start small - 15 minutes daily is powerful',
          'Mix hygiene care with joy-based activities',
          'Notice how you feel when you prioritize yourself'
        ],
        reflection: 'What activities genuinely restore you?',
        quote: '"Self-care is not indulgence, it\'s survival." - Audre Lorde'
      }
    ]
  },

  'relationships': {
    title: 'Relationships & Social Life',
    emoji: '💕',
    color: '#FFB6C1',
    description: 'Build stronger connections and navigate relationship challenges.',
    advice: [
      {
        id: 1,
        title: 'Managing Friendship Conflicts',
        problem: 'Tension or misunderstanding with a friend',
        description: 'Healthy conflict resolution strengthens friendships.',
        steps: [
          'Take time to cool down before discussing',
          'Choose a calm, private setting',
          'Use "I feel" statements, not accusations',
          'Listen without planning your defense',
          'Agree on how to prevent it next time'
        ],
        reflection: 'Which friendships matter most to you?',
        quote: '"A real friend walks in when others walk out." - Winchell'
      },
      {
        id: 2,
        title: 'Navigating Family Relationships',
        problem: 'Family tensions or unresolved conflicts',
        description: 'Set boundaries while maintaining connection.',
        steps: [
          'Identify specific behaviors that hurt you',
          'Communicate calmly about what you need',
          'Set healthy boundaries',
          'Accept you can\'t change others',
          'Find common ground and shared values'
        ],
        reflection: 'Which family relationship would you like to improve?',
        quote: '"In family, love is the oil that eases friction." - Nietzsche'
      },
      {
        id: 3,
        title: 'Building Healthy Romantic Relationships',
        problem: 'Creating or maintaining a strong partnership',
        description: 'Healthy love requires mutual respect and communication.',
        steps: [
          'Maintain your own interests and friendships',
          'Practice regular, honest communication',
          'Show appreciation for small things daily',
          'Address issues early before resentment builds',
          'Invest in quality time together'
        ],
        reflection: 'What qualities do you want in a partner?',
        quote: '"Love is choosing to protect something." - Unknown'
      },
      {
        id: 4,
        title: 'Healing from Breakups',
        problem: 'Processing heartbreak and moving forward',
        description: 'Breakups are grief. Allow yourself to feel while rebuilding.',
        steps: [
          'Allow yourself to feel sadness',
          'Limit contact with your ex',
          'Lean on friends and family',
          'Invest time in hobbies and self-discovery',
          'Practice self-compassion'
        ],
        reflection: 'What have you learned about yourself?',
        quote: '"The cure for anything is salt water." - Dinesen'
      },
      {
        id: 5,
        title: 'Improving Communication Skills',
        problem: 'Misunderstandings and difficulty expressing yourself',
        description: 'Clear communication is the foundation of healthy relationships.',
        steps: [
          'Listen actively - focus on understanding',
          'Use specific examples, not generalizations',
          'Validate the other person\'s feelings',
          'Ask clarifying questions',
          'Be aware of body language and tone'
        ],
        reflection: 'Who do you communicate best with? Why?',
        quote: '"Hearing what isn\'t being said matters most." - Drucker'
      }
    ]
  },

  'self-growth': {
    title: 'Self-Growth & Personal Development',
    emoji: '⭐',
    color: '#FFE5B4',
    description: 'Build confidence, discipline, and become your best self.',
    advice: [
      {
        id: 1,
        title: 'Building Unshakeable Self-Confidence',
        problem: 'Constant self-doubt and insecurity',
        description: 'Confidence grows through action, not thinking.',
        steps: [
          'Challenge negative self-talk with evidence',
          'Take small actions that scare you',
          'Celebrate wins, no matter how small',
          'Surround yourself with supportive people',
          'Practice positive affirmations daily'
        ],
        reflection: 'When do you feel most confident?',
        quote: '"Believe in yourself, you\'re halfway there." - Roosevelt'
      },
      {
        id: 2,
        title: 'Developing Self-Discipline',
        problem: 'Difficulty following through on commitments',
        description: 'Discipline is built through consistent, small actions.',
        steps: [
          'Start with tiny habits - 2 minutes is enough',
          'Remove friction for good habits, add friction for bad',
          'Track your progress visually',
          'Prepare the environment the night before',
          'Celebrate consistency, not perfection'
        ],
        reflection: 'What habit would transform your life?',
        quote: '"Discipline is choosing what you want most." - Rohn'
      },
      {
        id: 3,
        title: 'Finding Your Motivation',
        problem: 'Feeling unmotivated and directionless',
        description: 'Motivation follows action. Start before you feel ready.',
        steps: [
          'Connect your actions to deeper values',
          'Break goals into tiny milestones',
          'Find an accountability partner',
          'Celebrate progress, not just results',
          'Remember your "why" when motivation dips'
        ],
        reflection: 'What activities make you lose track of time?',
        quote: '"Create motivation through action." - Unknown'
      },
      {
        id: 4,
        title: 'Building Better Habits',
        problem: 'Struggling to develop positive habits',
        description: 'Habits are the compound interest of self-improvement.',
        steps: [
          'Use habit stacking: attach new habits to existing ones',
          'Make habits obvious and easy',
          'Track daily - seeing the chain motivates',
          'Start absurdly small (1 minute counts)',
          'Focus on identity, not outcomes'
        ],
        reflection: 'Which 3 habits would most improve your life?',
        quote: '"You are the sum of your habits." - Clear'
      },
      {
        id: 5,
        title: 'Setting and Achieving Goals',
        problem: 'Goals that never seem to happen',
        description: 'Effective goal-setting combines vision with systems.',
        steps: [
          'Set SMART goals with specific deadlines',
          'Break goals into monthly and weekly milestones',
          'Create a system that makes success easy',
          'Review progress weekly',
          'Adjust based on what you\'re learning'
        ],
        reflection: 'What do you want to achieve this year?',
        quote: '"A goal is a dream with a deadline." - Hill'
      }
    ]
  },

  'education': {
    title: 'Education & Student Life',
    emoji: '📚',
    color: '#B4E8D4',
    description: 'Master learning techniques and excel academically.',
    advice: [
      {
        id: 1,
        title: 'Effective Study Techniques',
        problem: 'Studying hard but not retaining information',
        description: 'Passive reading doesn\'t work. Active learning does.',
        steps: [
          'Use the Feynman Technique: teach concepts to others',
          'Spaced repetition: review material over time',
          'Practice retrieval: test yourself before exams',
          'Interleaving: mix different subjects together',
          'Use active recall, not passive re-reading'
        ],
        reflection: 'How do you currently study?',
        quote: '"Learning is done by you, not to you." - Unknown'
      },
      {
        id: 2,
        title: 'Time Management for Students',
        problem: 'Overwhelmed by coursework and assignments',
        description: 'Time management is about priorities, not tricks.',
        steps: [
          'Break assignments into smaller tasks',
          'Use a calendar and plan backwards from due dates',
          'Study in focused 25-50 minute blocks',
          'Prioritize hardest subjects when energy is highest',
          'Build in buffer time for unexpected issues'
        ],
        reflection: 'When do you do your best work?',
        quote: '"Time is what we want most but waste most." - Penn'
      },
      {
        id: 3,
        title: 'Overcoming Procrastination',
        problem: 'Always starting assignments at the last minute',
        description: 'Procrastination is an emotion regulation problem.',
        steps: [
          'Start with just 2 minutes - momentum builds',
          'Make the task easier: outline, gather materials',
          'Work on harder tasks first',
          'Use environmental cues to trigger good habits',
          'Address the emotion, not just the task'
        ],
        reflection: 'What emotions trigger your procrastination?',
        quote: '"Just take the first step." - MLK'
      },
      {
        id: 4,
        title: 'Managing Exam Anxiety',
        problem: 'Panic or blanking out during exams',
        description: 'Exam anxiety is normal. Preparation manages it.',
        steps: [
          'Study consistently - cramming increases anxiety',
          'Practice with past papers and timed tests',
          'Use breathing techniques during the exam',
          'Get good sleep the night before',
          'You\'ve prepared, you can do this'
        ],
        reflection: 'What specific moments cause most anxiety?',
        quote: '"Anxiety is just fear with nowhere to go." - Unknown'
      },
      {
        id: 5,
        title: 'Excelling in Online Learning',
        problem: 'Struggling with remote or online education',
        description: 'Online learning requires different strategies.',
        steps: [
          'Create a dedicated study space',
          'Stick to a schedule - treat it like in-person class',
          'Participate actively in discussions',
          'Reach out to instructors and classmates',
          'Take regular breaks to avoid screen fatigue'
        ],
        reflection: 'What tools help you focus in your environment?',
        quote: '"Education is the most powerful weapon." - Mandela'
      }
    ]
  },

  'career': {
    title: 'Career & Work Life',
    emoji: '💼',
    color: '#B4D4E8',
    description: 'Navigate career challenges and build professional growth.',
    advice: [
      {
        id: 1,
        title: 'Managing Job Stress',
        problem: 'Work anxiety affecting your health and happiness',
        description: 'Job stress is real. Managing it requires boundaries.',
        steps: [
          'Identify specific stressors',
          'Take regular breaks throughout the day',
          'Build positive relationships with colleagues',
          'Set realistic expectations for yourself',
          'Leave work at work - have a transition ritual'
        ],
        reflection: 'Which parts of your job energize you?',
        quote: '"Do great work that you love." - Jobs'
      },
      {
        id: 2,
        title: 'Achieving Work-Life Balance',
        problem: 'Work consuming all your time and energy',
        description: 'Balance requires intentional boundaries, not hope.',
        steps: [
          'Set specific work hours and stick to them',
          'Turn off notifications after hours',
          'Create rituals to transition from work',
          'Schedule personal time like work meetings',
          'Learn to say no to unreasonable demands'
        ],
        reflection: 'Are you living to work or working to live?',
        quote: '"Work fills a large part of your life." - Jobs'
      },
      {
        id: 3,
        title: 'Planning Your Career Path',
        problem: 'Unsure about career direction or feeling stuck',
        description: 'Career planning gives direction to your professional life.',
        steps: [
          'Reflect on your values and strengths',
          'Research careers aligned with your interests',
          'Seek mentors in fields you\'re interested in',
          'Build relevant skills through learning',
          'Set 1-year, 5-year, and 10-year goals'
        ],
        reflection: 'What does your ideal career look like?',
        quote: '"Choose a job you love." - Confucius'
      },
      {
        id: 4,
        title: 'Dealing with Professional Failure',
        problem: 'After being passed over, fired, or disappointing performance',
        description: 'Professional setbacks are learning opportunities.',
        steps: [
          'Allow yourself to feel disappointed',
          'Separate the outcome from your worth',
          'Analyze what you\'ll do differently next time',
          'Seek feedback from trusted mentors',
          'Keep perspective: this is temporary'
        ],
        reflection: 'What did you learn from this experience?',
        quote: '"Failure gives success its flavor." - Capote'
      },
      {
        id: 5,
        title: 'Professional Development and Growth',
        problem: 'Feeling stagnant or passed over for advancement',
        description: 'Growth requires continuous learning and visibility.',
        steps: [
          'Identify skills needed for your next role',
          'Take courses or certifications',
          'Volunteer for challenging projects',
          'Build your professional network',
          'Seek mentorship and feedback'
        ],
        reflection: 'What skills would make you indispensable?',
        quote: '"Invest in yourself, the best investment." - Unknown'
      }
    ]
  },

  'finance': {
    title: 'Financial Life',
    emoji: '💰',
    color: '#E8D4B4',
    description: 'Develop healthy financial habits and reduce money stress.',
    advice: [
      {
        id: 1,
        title: 'Budgeting Basics',
        problem: 'Don\'t know where your money goes',
        description: 'A budget is a tool for freedom, not restriction.',
        steps: [
          'Track income and expenses for one month',
          'Categorize: needs, wants, savings',
          'Set realistic limits for each category',
          'Use apps or spreadsheets to monitor',
          'Review monthly and adjust'
        ],
        reflection: 'Where does your money actually go each month?',
        quote: '"Tell your money where to go." - Maxwell'
      },
      {
        id: 2,
        title: 'Smart Saving Strategies',
        problem: 'Living paycheck to paycheck',
        description: 'Savings provide security and options.',
        steps: [
          'Automate savings transfers on payday',
          'Start small - even $25 weekly helps',
          'Use the 50/30/20 rule: needs/wants/savings',
          'Find low-cost ways to save',
          'Track your progress and celebrate milestones'
        ],
        reflection: 'What would savings change for you?',
        quote: '"A penny saved is a penny earned." - Franklin'
      },
      {
        id: 3,
        title: 'Managing Financial Stress',
        problem: 'Money anxiety affecting your wellbeing',
        description: 'Financial stress is real. Action reduces anxiety.',
        steps: [
          'Create a realistic financial plan',
          'Face your numbers - don\'t avoid them',
          'Seek professional advice if needed',
          'Focus on what you can control',
          'Practice gratitude for what you have'
        ],
        reflection: 'What\'s the specific money worry that bothers you most?',
        quote: '"Money is a tool, not a purpose." - Unknown'
      },
      {
        id: 4,
        title: 'Distinguishing Needs vs Wants',
        problem: 'Impulsive spending and lifestyle creep',
        description: 'Being intentional about spending gives freedom.',
        steps: [
          'Use the 24-hour rule for non-essentials',
          'Ask: "Do I need this or want this?"',
          'Unsubscribe from marketing emails',
          'Use cash for discretionary spending',
          'Practice gratitude for what you have'
        ],
        reflection: 'What purchases do you regret?',
        quote: '"Not spending money is more fun." - Unknown'
      },
      {
        id: 5,
        title: 'Building Financial Literacy',
        problem: 'Confused about investments and financial planning',
        description: 'Financial literacy is empowering and attainable.',
        steps: [
          'Learn about compound interest',
          'Understand different investment types',
          'Start with retirement accounts',
          'Read one personal finance book',
          'Follow reputable financial educators'
        ],
        reflection: 'What financial topic would help you most?',
        quote: '"Investment in knowledge pays the best interest." - Franklin'
      }
    ]
  },

  'health': {
    title: 'Physical Health & Lifestyle',
    emoji: '💪',
    color: '#D4E8B4',
    description: 'Build healthy routines and take care of your body.',
    advice: [
      {
        id: 1,
        title: 'Improving Sleep Quality',
        problem: 'Insomnia or poor sleep affecting your life',
        description: 'Sleep is foundational to all health.',
        steps: [
          'Set consistent sleep and wake times',
          'Create a relaxing pre-sleep routine',
          'Avoid screens 1 hour before bed',
          'Keep your bedroom cool, dark, quiet',
          'Limit caffeine and heavy meals'
        ],
        reflection: 'What prevents you from sleeping well?',
        quote: '"Sleep is the best meditation." - Dalai Lama'
      },
      {
        id: 2,
        title: 'Building Healthy Habits',
        problem: 'Struggling to establish healthy routines',
        description: 'Small consistent habits compound over time.',
        steps: [
          'Start with one habit at a time',
          'Make it easy: prepare the night before',
          'Track daily - seeing the chain motivates',
          'Be consistent, even when it\'s hard',
          'Celebrate the habit, not just results'
        ],
        reflection: 'Which healthy habit would most improve your life?',
        quote: '"Take care of your body." - Rohn'
      },
      {
        id: 3,
        title: 'Finding Exercise Motivation',
        problem: 'Knowing I should exercise but not doing it',
        description: 'Movement should feel good, not like punishment.',
        steps: [
          'Find activities you actually enjoy',
          'Start small - 15 minute walks count',
          'Exercise with others for accountability',
          'Focus on how you feel, not calories',
          'Schedule it like important meetings'
        ],
        reflection: 'What activities make you feel energized?',
        quote: '"Exercise is a celebration of what your body can do." - Unknown'
      },
      {
        id: 4,
        title: 'Digital Detox and Screen Time',
        problem: 'Addicted to phone and social media',
        description: 'Digital overuse drains energy. Intentional use gives freedom.',
        steps: [
          'Set phone-free times: meals, before bed',
          'Delete addictive apps temporarily',
          'Replace screen time with other hobbies',
          'Notice how you feel without notifications',
          'Use technology intentionally, not reactively'
        ],
        reflection: 'How much screen time is enriching your life?',
        quote: '"We are addicted to technologies that distract us." - Newport'
      },
      {
        id: 5,
        title: 'Energy Management',
        problem: 'Constantly tired and running on empty',
        description: 'Energy management is about priorities and boundaries.',
        steps: [
          'Identify what drains your energy most',
          'Schedule high-energy activities when alert',
          'Take regular breaks throughout the day',
          'Nourish yourself: food, sleep, nature',
          'Say no to energy vampires'
        ],
        reflection: 'What activities energize you? Are you doing them?',
        quote: '"Energy management is time management." - Unknown'
      }
    ]
  },

  'mindfulness': {
    title: 'Mindfulness & Inner Peace',
    emoji: '🧘',
    color: '#E8D4E8',
    description: 'Find peace and presence through mindful practices.',
    advice: [
      {
        id: 1,
        title: 'Starting a Meditation Practice',
        problem: 'Mind too busy to meditate',
        description: 'Meditation is not about empty mind, it\'s about noticing.',
        steps: [
          'Start with 5 minutes daily',
          'Find a quiet, comfortable space',
          'Focus on your breath',
          'When mind wanders, gently return focus',
          'Use apps like Headspace or Calm for guidance'
        ],
        reflection: 'What would change with 15 minutes of peace daily?',
        quote: '"Meditation is the ultimate mobile device." - Unknown'
      },
      {
        id: 2,
        title: 'Practicing Gratitude',
        problem: 'Always focusing on what\'s missing',
        description: 'Gratitude rewires your brain toward positive thinking.',
        steps: [
          'Write 3 things you\'re grateful for daily',
          'Notice small joys throughout the day',
          'Thank people specifically',
          'Revisit past gratitude on hard days',
          'Share appreciation with others'
        ],
        reflection: 'What are you grateful for right now?',
        quote: '"Gratitude is the best attitude." - Unknown'
      },
      {
        id: 3,
        title: 'Mindful Living',
        problem: 'Living on autopilot, not present',
        description: 'Presence transforms ordinary moments into meaningful ones.',
        steps: [
          'Eat one meal mindfully without distractions',
          'Take a walk noticing your senses',
          'Listen to others without planning your response',
          'Single-task instead of multitasking',
          'Notice beauty in everyday moments'
        ],
        reflection: 'When do you feel most present?',
        quote: '"The present moment is the only moment available." - Thich Nhat Hanh'
      },
      {
        id: 4,
        title: 'Letting Go of Negativity',
        problem: 'Holding onto grudges and past hurts',
        description: 'Holding onto negativity only hurts you.',
        steps: [
          'Acknowledge the hurt without judgment',
          'Understand holding on keeps you stuck',
          'Practice forgiveness (not condoning)',
          'Release what you cannot control',
          'Focus energy on healing, not revenge'
        ],
        reflection: 'What are you ready to let go of?',
        quote: '"Holding a grudge is like drinking poison." - Buddha'
      },
      {
        id: 5,
        title: 'Finding Inner Peace',
        problem: 'Constant inner turbulence and restlessness',
        description: 'Peace comes from within, not from circumstances.',
        steps: [
          'Identify what steals your peace',
          'Create non-negotiable peace practices',
          'Spend time in nature regularly',
          'Practice acceptance of what you cannot change',
          'Connect with your deeper values'
        ],
        reflection: 'When do you feel most at peace?',
        quote: '"Peace comes from within." - Buddha'
      }
    ]
  },

  'life-transitions': {
    title: 'Life Transitions',
    emoji: '🌱',
    color: '#D4B4E8',
    description: 'Navigate major life changes with resilience and grace.',
    advice: [
      {
        id: 1,
        title: 'Navigating Early Adulthood',
        problem: 'Overwhelmed by adult responsibilities',
        description: 'Early adulthood is uncertain. That\'s completely normal.',
        steps: [
          'Give yourself grace - you don\'t have it all figured out',
          'Build a support system of peers',
          'Ask for help from mentors',
          'Make decisions with available information',
          'Remember: you can adjust course anytime'
        ],
        reflection: 'What\'s most challenging about this transition?',
        quote: '"Growing up is losing your illusions." - Unknown'
      },
      {
        id: 2,
        title: 'Coping with Moving to a New Place',
        problem: 'Loneliness and displacement after moving',
        description: 'Moving is an opportunity to build new connections.',
        steps: [
          'Give yourself time to adjust - 3 months minimum',
          'Explore your new neighborhood gradually',
          'Join groups aligned with your interests',
          'Maintain connections from your previous place',
          'Create new rituals in your new home'
        ],
        reflection: 'What excites you about this new place?',
        quote: '"Home is not a place, it\'s a feeling." - Unknown'
      },
      {
        id: 3,
        title: 'Managing Career Changes',
        problem: 'Anxiety about switching careers or jobs',
        description: 'Career changes are opportunities for growth.',
        steps: [
          'Clarify why you\'re making this change',
          'Build skills needed for your new path',
          'Network in your new field',
          'Embrace being a beginner',
          'Stay flexible as you discover'
        ],
        reflection: 'What\'s driving this change for you?',
        quote: '"Do great work you love." - Jobs'
      },
      {
        id: 4,
        title: 'Recovering from Major Setbacks',
        problem: 'Struggling to move on from failure or loss',
        description: 'Setbacks are detours, not dead ends.',
        steps: [
          'Allow yourself time to grieve',
          'Extract lessons without self-blame',
          'Build a support system',
          'Take small steps toward new direction',
          'Celebrate progress over outcomes'
        ],
        reflection: 'What are you learning from this experience?',
        quote: '"What seems impossible will become your warm-up." - Unknown'
      },
      {
        id: 5,
        title: 'Embracing New Chapters',
        problem: 'Fear and uncertainty about the future',
        description: 'Each chapter is an opportunity for reinvention.',
        steps: [
          'Let go of who you were',
          'Stay curious about who you\'re becoming',
          'Take intentional actions aligned with values',
          'Build confidence through small wins',
          'Trust yourself to handle what comes'
        ],
        reflection: 'Who are you becoming in this new chapter?',
        quote: '"Life is what happens while making other plans." - Lennon'
      }
    ]
  },

  'confidence': {
    title: 'Confidence & Social Skills',
    emoji: '🎤',
    color: '#E8E8B4',
    description: 'Build courage and master social interactions.',
    advice: [
      {
        id: 1,
        title: 'Overcoming Public Speaking Anxiety',
        problem: 'Terror of speaking in front of groups',
        description: 'Public speaking is a skill, not a talent. You can learn it.',
        steps: [
          'Practice thoroughly - preparation reduces anxiety',
          'Imagine success, not failure',
          'Start small: speak in smaller groups first',
          'Focus on your message, not yourself',
          'Remember: audience wants you to succeed'
        ],
        reflection: 'What specifically about speaking scares you?',
        quote: '"Talk to yourself like someone you love." - Brené Brown'
      },
      {
        id: 2,
        title: 'Managing Social Anxiety',
        problem: 'Dreading social situations',
        description: 'Social anxiety is treatable and manageable.',
        steps: [
          'Identify specific situations that trigger anxiety',
          'Start with lower-stakes social situations',
          'Practice grounding techniques before socializing',
          'Focus on others instead of yourself',
          'Celebrate small social victories'
        ],
        reflection: 'Which social situations feel most comfortable?',
        quote: '"Courage is being scared but saddling up anyway." - Westerns'
      },
      {
        id: 3,
        title: 'Learning to Say No',
        problem: 'Overcommitting and people-pleasing',
        description: 'Saying no to others means saying yes to yourself.',
        steps: [
          'Remember: no is a complete sentence',
          'Practice responses in low-stakes situations',
          'Offer alternatives when appropriate',
          'Don\'t over-explain your reasoning',
          'Notice how empowering it feels'
        ],
        reflection: 'What would change if you said no more?',
        quote: '"Every yes is a no to something else." - McKeown'
      },
      {
        id: 4,
        title: 'Setting and Maintaining Boundaries',
        problem: 'People respecting your time and limits',
        description: 'Boundaries are healthy and necessary.',
        steps: [
          'Identify your limits and values',
          'Communicate boundaries clearly',
          'Be consistent in enforcing them',
          'Don\'t justify or over-explain',
          'Remind yourself why they matter'
        ],
        reflection: 'Where do you need stronger boundaries?',
        quote: '"Boundaries are a sign of self-respect." - Shelton'
      },
      {
        id: 5,
        title: 'Building Genuine Social Connections',
        problem: 'Feeling isolated despite being around people',
        description: 'Real connection requires vulnerability and authenticity.',
        steps: [
          'Show genuine interest in others',
          'Share your true self, not your polished self',
          'Invest time in deeper conversations',
          'Join communities aligned with your values',
          'Be the friend you want to have'
        ],
        reflection: 'Who makes you feel truly seen and accepted?',
        quote: '"The greatest gift is your authentic self." - Unknown'
      }
    ]
  },

  'productivity': {
    title: 'Productivity & Daily Life',
    emoji: '⚡',
    color: '#E8D4D4',
    description: 'Master focus and create meaningful routines.',
    advice: [
      {
        id: 1,
        title: 'Deep Work and Focus Techniques',
        problem: 'Constant distractions preventing deep work',
        description: 'Deep work is the superpower of success.',
        steps: [
          'Eliminate notifications during focus time',
          'Use Pomodoro Technique: 25 min focus, 5 min break',
          'Work on hardest tasks when energy is highest',
          'Create environmental cues for focus',
          'Batch similar tasks together'
        ],
        reflection: 'When do you do your best work?',
        quote: '"The ability to concentrate is a superpower." - Ravikant'
      },
      {
        id: 2,
        title: 'Optimizing Your Morning Routine',
        problem: 'Starting days chaotic and reactive',
        description: 'Your morning sets the tone for your entire day.',
        steps: [
          'Wake at consistent time',
          'Hydrate and move your body first',
          'Review your intentions for the day',
          'Do your most important task first',
          'Avoid phone for first hour if possible'
        ],
        reflection: 'What would your ideal morning look like?',
        quote: '"How you spend morning determines your day." - Elrod'
      },
      {
        id: 3,
        title: 'Digital Organization and Minimalism',
        problem: 'Digital life chaotic and overwhelming',
        description: 'Digital organization saves time and mental energy.',
        steps: [
          'Unsubscribe from emails you don\'t read',
          'Organize files into clear folders',
          'Use task management apps',
          'Delete old files and photos',
          'One inbox for all tasks'
        ],
        reflection: 'How much mental load is your digital life causing?',
        quote: '"Clutter is just delayed decisions." - Unknown'
      },
      {
        id: 4,
        title: 'Avoiding Productivity Burnout',
        problem: 'Optimizing yourself to exhaustion',
        description: 'Sustainability beats intensity.',
        steps: [
          'Quality over quantity of tasks',
          'Build rest into your schedule',
          'Question productivity culture assumptions',
          'Focus on meaningful work, not busy work',
          'Your worth isn\'t your output'
        ],
        reflection: 'Are you producing more or living better?',
        quote: '"Rest is productive." - Unknown'
      },
      {
        id: 5,
        title: 'Creating Sustainable Routines',
        problem: 'Routines that don\'t stick',
        description: 'Sustainable routines compound into transformation.',
        steps: [
          'Design around your natural rhythms',
          'Start absurdly small - 1% changes',
          'Stack new habits onto existing ones',
          'Track progress visibly',
          'Adjust when life changes'
        ],
        reflection: 'Which routines do you naturally maintain?',
        quote: '"You are the product of your routines." - Unknown'
      }
    ]
  }
};

// Helper functions
function getAllCategories() {
  return Object.keys(adviceData).map(key => ({
    id: key,
    title: adviceData[key].title,
    emoji: adviceData[key].emoji,
    color: adviceData[key].color,
    description: adviceData[key].description
  }));
}

function getAdviceByCategory(categoryId) {
  return adviceData[categoryId];
}

function searchAdvice(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();

  Object.entries(adviceData).forEach(([categoryId, category]) => {
    category.advice.forEach(item => {
      if (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.problem.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.steps.some(step => step.toLowerCase().includes(lowerQuery))
      ) {
        results.push({
          categoryId,
          categoryTitle: category.title,
          categoryEmoji: category.emoji,
          ...item
        });
      }
    });
  });

  return results;
}

// Mood-based suggestions
const moodSuggestions = {
  anxious: ['mental-health', 'mindfulness', 'health'],
  stressed: ['mental-health', 'career', 'productivity'],
  lonely: ['relationships', 'confidence', 'health'],
  unmotivated: ['self-growth', 'productivity', 'career'],
  lost: ['life-transitions', 'self-growth', 'education'],
  overwhelmed: ['productivity', 'mental-health', 'finance'],
  inadequate: ['self-growth', 'confidence', 'career'],
  sad: ['mindfulness', 'relationships', 'health']
};

function getSuggestedCategories(mood) {
  const suggestions = moodSuggestions[mood.toLowerCase()] || [];
  return suggestions.map(id => ({
    id,
    title: adviceData[id].title,
    emoji: adviceData[id].emoji
  }));
}

// Bookmarking functions
function saveBookmark(categoryId, itemId) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
  if (!bookmarks[categoryId]) {
    bookmarks[categoryId] = [];
  }
  if (!bookmarks[categoryId].includes(itemId)) {
    bookmarks[categoryId].push(itemId);
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function removeBookmark(categoryId, itemId) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
  if (bookmarks[categoryId]) {
    bookmarks[categoryId] = bookmarks[categoryId].filter(id => id !== itemId);
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function isBookmarked(categoryId, itemId) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
  return bookmarks[categoryId] && bookmarks[categoryId].includes(itemId);
}

function getAllBookmarks() {
  return JSON.parse(localStorage.getItem('bookmarks')) || {};
}

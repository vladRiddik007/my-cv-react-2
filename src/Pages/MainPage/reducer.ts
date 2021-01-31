export type User = {
  name: string
  profession: string
  profile: string
  contacts: {
    link: string
    icon: string
  }[]
  skills: string[]
  languages: {
    language: string
    level: number
  }[]
  educatione: {
    start: string | Date
    end: string | Date
    name: string
  }
  experience: {
    start: string | Date
    end: string | Date
    name: string
    position: string
    skillsList: string[]
    responsibilities: string[]
  }
}

export const initialState: User = {
  name: 'Vladyslav Sidikov',
  profession: 'React Developer',
  profile: `I am proficient in JavaScript, 
    CSS, HTML and React with Redux. I am also 
    have skill at using Git. I’m always working 
    towards updating my skills.`,
  contacts: [
    {
      link: '+380956886720',
      icon: 'fas fa-phone-alt',
    },
    {
      link: 'vlad.sidikov007@gmail.com',
      icon: 'fas fa-at',
    },
    {
      link: 'http://github.com/vladRiddik007',
      icon: 'fab fa-github',
    },
    {
      link: 'http://linkedin.com/in/vladyslav-sidikov-7425a019b',
      icon: 'fab fa-linkedin',
    },
    {
      link: 'https://www.instagram.com/',
      icon: 'fab fa-instagram-square',
    },
  ],
  skills: [
    'JavaScript, TypeScript;',
    'CSS, CSS3, Adaptive layout, Styled-component, SCSS;',
    'React JS;',
  ],
  languages: [
    {
      language: 'English',
      level: 2,
    },
    {
      language: 'Russian',
      level: 6,
    },
    {
      language: 'Ukrainian',
      level: 6,
    },
  ],
  educatione: {
    start: '09.2010',
    end: '05.2015',
    name: `Ukrainian state university of railway transport`,
  },
  experience: {
    start: '07.2020',
    end: 'present',
    name: 'FlySoft',
    position: 'Front End developer(React)',
    skillsList: [
      'JavaScript (ES6), Typescript;',
      'React (React hooks, React-Router);',
      'Redux( redux thunk);',
      'NextJs;',
    ],
    responsibilities: [
      'Project setup;',
      'Responsive layouts using React;',
      'Services integration;',
      'Connecting to backend.',
    ],
  },
}

export enum ActionKind {
  setName = 'SET_NAME',
  setProfession = 'SET_PROFESSION',
}

export type Action =
  | { type: ActionKind.setName; payload: string }
  | { type: ActionKind.setProfession; payload: string }

export function reducer(state: User, action: Action): User {
  const { type, payload } = action
  switch (type) {
    case ActionKind.setName:
      return { ...state, name: payload }
    case ActionKind.setProfession:
      return { ...state, profession: payload }
    default:
      return state
  }
}

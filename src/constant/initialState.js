import { v1 as uuidv1 } from 'uuid';

const INITIAL_STATE = [
  {
    id: uuidv1(),
    title: 'Shreds of Tenderness',
    category: 'Learning',
  },
  {
    id: uuidv1(),
    title: 'Wheels on the Bus',
    category: 'kids',
  },
  {
    id: uuidv1(),
    title: 'Expendables',
    category: 'Action',
  },
  {
    id: uuidv1(),
    title: 'Away and Apart',
    category: 'Sci-fi',
  },
  {
    id: uuidv1(),
    title: 'The Bye Bye Man',
    category: 'Horror',
  },
];

export default INITIAL_STATE;

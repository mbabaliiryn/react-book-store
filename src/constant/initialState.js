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
    category: 'Kids',
  },
  {
    id: uuidv1(),
    title: 'Expendables',
    category: 'Action',
  },
  {
    id: uuidv1(),
    title: 'Away and Apart',
    category: 'Sci-Fi',
  },
  {
    id: uuidv1(),
    title: 'The Bye Bye Man',
    category: 'Horror',
  },
  {
    id: uuidv1(),
    title: 'Mau Mau Warriors ',
    category: 'History',
  },
  {
    id: uuidv1(),
    title: 'My Life in Crime',
    category: 'Biography',
  },
];

export default INITIAL_STATE;

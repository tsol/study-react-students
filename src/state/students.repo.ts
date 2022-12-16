import {  createStore  } from '@ngneat/elf';
import {
  withEntities,
  setEntities,
  selectAllEntities
} from '@ngneat/elf-entities';

import { Student } from '../schema/schema';

const store = createStore(
  { name: 'students' },
  withEntities<Student>()
);

export const allStudents$ = store.pipe(selectAllEntities());

export function setStudents(students: Student[]) {
  store.update(setEntities(students));
}


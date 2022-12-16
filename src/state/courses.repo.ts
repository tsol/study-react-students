import { createStore  } from '@ngneat/elf';
import {
  withEntities,
  setEntities,
  selectAllEntities
} from '@ngneat/elf-entities';

import { Course } from '../schema/schema';

const store = createStore(
  { name: 'courses' },
  withEntities<Course>()
);

export const allCourses$ = store.pipe(selectAllEntities());

export function setCourses(courses: Course[]) {
  store.update(setEntities(courses));
}


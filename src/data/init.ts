import {Student, Course, Level} from '../schema/schema';
import { setStudents } from '../state/students.repo';
import { setCourses } from '../state/courses.repo';

const studentList: Student[] = [
  { id: 1, name: 'Antony', surname: 'Ndungu', level: Level.Undergraduate, age: 20 },
  { id: 2, name: 'Chanelle', surname: 'John', level: Level.Postgraduate, age: 50 },
  { id: 3, name: 'Ian', surname: 'Smith', level: Level.Undergraduate, age: 46 },
  { id: 4, name: 'Michael', surname: 'Starke', level: Level.Undergraduate, age: 64 },
  { id: 5, name: 'Chris', surname: 'De Kock', level: Level.Undergraduate, age: 19 },
];

setStudents(studentList);

const coursesList: Course[] = [
  { id: 1, code: 'A141', name: 'Algorithms Analysis', description: 'Analysis & Design' },
  { id: 2, code: 'BN445', name: 'Computer Architecture I', description: 'Computer Architecture' },
  { id: 3, code: 'P888', name: 'Operations Research', description: 'Maths - Operations Research' },
  { id: 4, code: 'Z9989', name: 'Discrete Maths', description: 'Discrete Mathematics' }
]

setCourses(coursesList);



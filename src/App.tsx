//App.tsx
import { useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { useObservable } from '@ngneat/use-observable';

import { LangSelect } from './components/LangSelect';
import { DisplayData } from "./components/DisplayData";
import { GenericSort } from "./helpers/GenericSort";

import { Student, Level } from './schema/schema'

import { allStudents$, setStudents } from "./state/students.repo";
import { allCourses$ } from "./state/courses.repo";


import './App.css'

function App() {
  const [students] = useObservable(allStudents$);
  const [courses] = useObservable(allCourses$);

  const { t } = useTranslation();

  const [student, setStudent] = useState<Student | null>(null)
  
  const addStudent = () => {
    setStudent({
      id: 1000,
      name: 'Antony',
      surname: 'Ndungu',
      age: 20,
      level: Level.Undergraduate
    })
  }
  const sortData = () => {
    GenericSort(students, "age")
    setStudents(students);
  }
  return (
    <div className="App">
      <LangSelect />
      <h1>{t('main.hello')}</h1>
      <p><b>{student?.name} {student?.surname}</b></p>
      {student?.level === Level.Undergraduate &&
        <p><b>{t('main.age')}: {student.age}</b></p>
      }
      <button onClick={addStudent}> {t('main.add_student')}</button>
      <br />
      <button onClick={sortData}>{t('main.sort_data')}</button>
      <h3>{t('main.list_students')}</h3>
      <div>
        <DisplayData items={students} />
      </div>
      <h3>{t('main.list_courses')}</h3>
      <div>
        <DisplayData items={courses} />
      </div>
    </div>
  );
}

export default withTranslation()(App);

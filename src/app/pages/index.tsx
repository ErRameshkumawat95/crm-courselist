'use client'
import axios from 'axios';
import { Course } from '../type';
import { useQuery } from '@tanstack/react-query';


const fetchCourses = async () => {
    const response = await axios.get('https://65b0efded16d31d11bdd9d06.mockapi.io/course');
    console.log(response)
    return response.data;
  };

 function CourseList(){
  const { data: courses, isLoading, isError } = useQuery({queryKey:['courses'],queryFn:fetchCourses}
   
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching courses</p>;
  }

  // console.log(data)

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course:Course) => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <img src={course.coverImage}></img>
            <img src={course. thumbnail}></img>
            {course.summary}
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;

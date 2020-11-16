import React from 'react'; // we need this to make JSX compile
import { useRouter } from 'next/router';
import Button from '../../src/components/Button';

const Course = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <aside>
      <h2>{ id }</h2>
      <Button size="small" classNames="btn" text="Show your name" onClick={() =>console.log("Hello NextJS")}/>
    </aside>
  );
};

export default Course;

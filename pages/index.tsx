import * as React from 'react'; // we need this to make JSX compile
import { useQuery, gql } from '@apollo/client';

const allCourses = gql`
  query {
    allCourses{
      id
      name
      description
      length
    }
  }
`

const Page = () => {
  const { data, loading } = useQuery(allCourses);

  if(loading) return <span>loading...</span>
  return  (<aside>
    <pre>
      {JSON.stringify(data, null, 4)}
    </pre>
  </aside>)
};

export default Page;

import axios from 'axios';
import Link from 'next/link';

export default async function Home() {

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      {
        data?.map(({ id, title }) => <div key={title} className='border border-white p-5 text-center mb-10'>
          <h1>{title}</h1>
          <Link href={`/${id}`}>
            <button className='border'>view</button>
          </Link>
        </div>)
      }
    </div>
  );
};

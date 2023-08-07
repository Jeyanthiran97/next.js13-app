import React, { Suspense } from 'react';
import Link from 'next/link';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';

const RepoPage = ({ params: {name} }) => {
  console.log(name);
  return (
    <div className='card'>
      <Link href={'/code/repos'} className='btn btn-back'>
        Back to Repository
      </Link>

      <Repo name={name} />

      <Suspense fallback={<div>Loading Contents...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
} 

export default RepoPage
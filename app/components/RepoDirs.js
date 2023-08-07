import Link from 'next/link';
import React from 'react'
import { FaFolder, FaRegFile } from 'react-icons/fa';

async function fetchRepoContents(name){
    const response = await fetch(
        `https://api.github.com/repos/jeyanthiran97/${name}/contents`
    );

    // Loading time set(testing purpose)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const contents = await response.json();
    return contents;
}

const RepoDirs = async({name}) => {
    const contents = await fetchRepoContents(name);

  return <>
        <h3>Contents</h3>
        <ul>{
            contents.map((dir)=>(
                <Link href={`/code/repos/${name}/${dir.path}`}>
                <li key={dir.path}>
                    {dir.type === "dir" ? <FaFolder /> : <FaRegFile />}
                    <span>{dir.path}</span>
                </li>
                </Link>
            ))
        }</ul>
    </>
}

export default RepoDirs

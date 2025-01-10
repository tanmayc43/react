import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then(response => response.json())
    //     .then(data => {
    //             console.log(data)
    //             setData(data)
    //         }
    //     )
    // }, [])

    return(
        <>
            <div className="text-center m-6 bg-black text-orange-500">
                Github Followers: {data.followers}
                <img src={data.avatar_url} alt = "Github-profile-photo" />
            </div> 
            //loader further optimises the code by fetching data even before this is page is called
        </>
    )
}

export default Github


export const githubInfoLoader =  async () => {
    const response = await fetch('https://api.github.com/users/tanmayc43')
    return response.json()
}
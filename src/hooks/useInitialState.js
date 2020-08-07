import { useState, useEffect } from "react";

const useInitialState = (API) => {
    
    const [videos, setVideos] = useState({"mylist": [], "trends": [], "original": []});

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(API);
                const data = await response.json();
                // console.log(data);
                return setVideos(data);
            } catch {
                console.log(error);
            }
        };
        fetchVideos();
    }, []);
    return videos;
};

export default useInitialState;
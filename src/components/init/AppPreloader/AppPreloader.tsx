import { useEffect, useState } from 'react';

interface AppPreloaderInterface {
    isPreloaded: boolean,
    externalLoader: HTMLElement | undefined,
}

const AppPreloader = (): AppPreloaderInterface => {
    const externalLoader: HTMLElement | undefined = document.getElementById('app-loader-external') || undefined;
    const [isPreloaded, setIsPreloaded] = useState<boolean>(false);
    useEffect(()=>{
        setIsPreloaded(true);
    },[]);
    return {
        isPreloaded,
        externalLoader,
    }
}
export default AppPreloader;

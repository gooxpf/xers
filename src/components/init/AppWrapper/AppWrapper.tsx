import React, {useEffect} from "react";
import AppLoader from "../AppLoader";
import AppPreloader from "../AppPreloader";

const AppWrapper: React.FC = (): React.ReactElement => {
    const { isPreloaded, externalLoader } = AppPreloader();

    useEffect(()=>{
        if (externalLoader?.parentNode && isPreloaded) {
            externalLoader.parentNode.removeChild(externalLoader);
        }
    },[isPreloaded, externalLoader]);

    return (
        <div className="app-wrapper">
            <AppLoader />
            <>
                content
            </>
        </div>
    );
}

export default AppWrapper;

import { useState } from "react";

export const withErrorApi = Comp => {


    return props => {
        const [errorApi, setErrorApi] = useState(false);

        return (
            <>
                {errorApi
                    ? <h2>Error</h2>
                    : < Comp setErrorApi={setErrorApi}
                        {...props} />
                }
            </>
        )
    }
}
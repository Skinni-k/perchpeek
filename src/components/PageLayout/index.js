import React, { lazy, Suspense } from "react";

import Spinner from "components/Spinner";

const Component = lazy(() => import("./PageLayout"));

export default (props) => (
    <Suspense
        fallback={
            <div
                style={{ display: "flex", justifyContent: "center", flex: 1, alignItems: "center" }}
            >
                <Spinner />
            </div>
        }
    >
        <Component {...props} />
    </Suspense>
);

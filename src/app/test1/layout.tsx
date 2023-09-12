import React from "react";

export default function Page1Layout({
    children,
} : {
    children: React.ReactNode;
}) {
    return <div>Page Layout 1
        {children}
    </div>;
}
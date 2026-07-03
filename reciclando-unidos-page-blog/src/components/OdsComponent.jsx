"use client";
import SDGAlignment from "./SDGAlignment";

const OdsComponent = () => {
    return (
        <SDGAlignment
            aligned={[4, 5, 8, 9, 12, 13]}
            onChange={(ids) => console.log(ids)}
        />
    )
}

export default OdsComponent
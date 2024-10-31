import React from "react";
import { TextField } from "@mui/material";

type TransformedOutputProps = {
    transformedX: string;
    transformedY: string;
    service: "WGS84 to LV95" | "LV95 to WGS84";
};

const TransformedOutput: React.FC<TransformedOutputProps> = ({ transformedX, transformedY, service }) => (
    <>
        <TextField
            label={service === "WGS84 to LV95" ? "Transformed E" : "Transformed LON"}
            value={transformedX}
            InputProps={{ readOnly: true }}
            fullWidth
        />
        <TextField
            label={service === "WGS84 to LV95" ? "Transformed N" : "Transformed LAT"}
            value={transformedY}
            InputProps={{ readOnly: true }}
            fullWidth
        />
    </>
);

export default TransformedOutput;

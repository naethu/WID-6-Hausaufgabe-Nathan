import React, { useState } from "react";
import SelectService from "./components/SelectService";
import CoordinateInput from "./components/CoordinateInput";
import TransformedOutput from "./components/TransformedOutput";
import { Button, Typography, Box } from "@mui/material";
import axios from "axios";
import "./App.css";

const App: React.FC = () => {
    const [service, setService] = useState<"LV95 to WGS84" | "WGS84 to LV95">("LV95 to WGS84");
    const [easting, setEasting] = useState<string>("");
    const [northing, setNorthing] = useState<string>("");
    const [transformedX, setTransformedX] = useState<string>("");
    const [transformedY, setTransformedY] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const handleTransform = async () => {
        try {
            const lon = parseFloat(easting);
            const lat = parseFloat(northing);

            const apiUrl =
                service === "WGS84 to LV95"
                    ? "http://geodesy.geo.admin.ch/reframe/wgs84tolv95"
                    : "http://geodesy.geo.admin.ch/reframe/lv95towgs84";

            const params = {
                easting: lon,
                northing: lat,
                format: "json",
            };

            const response = await axios.get(apiUrl, { params });

            if (response.status === 200) {
                const data = response.data;
                setTransformedX(data.easting);
                setTransformedY(data.northing);
                setError(false);
            } else {
                console.error("Unexpected response:", response);
                setError(true);
            }
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error("Axios error:", err);
                if (err.response) {
                    console.error("API response error:", err.response.data);
                }
            } else {
                console.error("Unexpected error:", err);
            }
            setError(true);
        }
    };

    return (
        <div>
            <Box sx={{ padding: "20px", minWidth: "600px", maxWidth: "600px", margin: "auto" }}>
                <Typography variant="h4" gutterBottom align="left">
                    Coordinate Transform
                </Typography>

                <Box sx={{ width: "50%", marginBottom: "16px" }}>
                    <SelectService service={service} setService={setService} />
                </Box>

                <Box sx={{ display: "flex", gap: "10px", marginBottom: "16px", width: "100%" }}>
                    <CoordinateInput
                        easting={easting}
                        setEasting={setEasting}
                        northing={northing}
                        setNorthing={setNorthing}
                        showEastingNorthing={service === "LV95 to WGS84"}
                    />
                </Box>

                <Box sx={{ width: "100%", marginBottom: "16px", textAlign: "center" }}>
                    <Button variant="contained" color="primary" onClick={handleTransform} fullWidth>
                        Transform
                    </Button>
                </Box>

                {error ? (
                    <Typography color="error">Error in Transformation. Beachten Sie das Format.</Typography>
                ) : (
                    <Box sx={{ display: "flex", gap: "10px", marginBottom: "16px", width: "100%" }}>
                        <TransformedOutput
                            transformedX={transformedX}
                            transformedY={transformedY}
                            service={service}
                        />
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default App;

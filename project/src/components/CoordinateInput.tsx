import React from "react";
import { TextField, Grid } from "@mui/material";

interface CoordinateInputProps {
    easting: string;
    setEasting: (value: string) => void;
    northing: string;
    setNorthing: (value: string) => void;
    showEastingNorthing: boolean;
}

const CoordinateInput: React.FC<CoordinateInputProps> = ({
                                                             easting,
                                                             setEasting,
                                                             northing,
                                                             setNorthing,
                                                             showEastingNorthing,
                                                         }) => {
    return (
        <Grid container spacing={2}>
            {showEastingNorthing ? (
                <>
                    <Grid item xs={6}>
                        <TextField
                            label="Easting"
                            value={easting}
                            onChange={(e) => setEasting(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Northing"
                            value={northing}
                            onChange={(e) => setNorthing(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                </>
            ) : (
                <>
                    <Grid item xs={6}>
                        <TextField
                            label="Longitude"
                            value={easting}
                            onChange={(e) => setEasting(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Latitude"
                            value={northing}
                            onChange={(e) => setNorthing(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                </>
            )}
        </Grid>
    );
};

export default CoordinateInput;

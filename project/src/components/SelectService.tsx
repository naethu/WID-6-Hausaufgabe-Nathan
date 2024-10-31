import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

interface SelectServiceProps {
    service: "LV95 to WGS84" | "WGS84 to LV95";
    setService: (value: "LV95 to WGS84" | "WGS84 to LV95") => void;
}

const SelectService: React.FC<SelectServiceProps> = ({ service, setService }) => {
    return (
        <FormControl fullWidth>
            <InputLabel>REFRAME Service</InputLabel>
            <Select
                sx={{
                    textAlign: "left",
                    '& .MuiSelect-select': {
                        justifyContent: 'flex-start',
                    },
                }}
                value={service}
                onChange={(e) => setService(e.target.value as "LV95 to WGS84" | "WGS84 to LV95")}
                label="REFRAME Service"
            >
                <MenuItem value="LV95 to WGS84">LV95 to WGS84</MenuItem>
                <MenuItem value="WGS84 to LV95">WGS84 to LV95</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectService;

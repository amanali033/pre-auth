import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  InputAdornment,
  Grid,
  InputLabel,
  Select,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTheme } from "@mui/material/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CustomButton from "../button/CustomButton";

const FilterBar = () => {
  const theme = useTheme();
  const [showFilters, setShowFilters] = useState(false);
  const [location, setLocation] = useState("");

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/*Show  Filters Button */}
        <button
          onClick={toggleFilters}
          class="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium min-h-11 rounded-md px-3 border border-[#e4e4e7]"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        {/* Export CSV Button */}
        <CustomButton bgColor="#2D9E76" startIcon={<Download />}>
          Export CSV
        </CustomButton>{" "}
      </Box>
      {/* Filters Section */}
      {showFilters && (
        <div className="space-y-4 p-4 border border-[#e4e4e7] rounded-lg mt-4 text-primary">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Grid container spacing={2}>
              {/* Pre Auth Status Dropdown */}
              <Grid item xs={12} sm={6}>
                <Box>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="status"
                  >
                    Select Pre Auth Status
                  </label>
                  <TextField
                    select
                    id="status"
                    variant="outlined"
                    size="small"
                    placeholder="Select Pre Auth Status"
                    sx={{
                      width: "100%",
                      backgroundColor: "transparent",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#e4e4e7", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "secondary.main", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "secondary.main", // Border color on focus
                        },
                      },
                    }}
                  >
                    <MenuItem value="approved">Approved</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="rejected">Rejected</MenuItem>
                  </TextField>
                </Box>
              </Grid>

              {/* Location Dropdown */}
              <Grid item xs={12} sm={6}>
                <Box>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="location"
                  >
                    Select Location
                  </label>
                  <TextField
                    id="location"
                    select
                    value={location} // Controlled value
                    onChange={(e) => setLocation(e.target.value)} // Handle change
                    variant="outlined"
                    size="small"
                    sx={{
                      width: "100%",
                      backgroundColor: "transparent",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#e4e4e7", // Default border color
                        },
                        "&:hover fieldset": {
                          borderColor: "secondary.main", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "secondary.main", // Border color on focus
                        },
                      },
                    }}
                  >
                    {/* Disabled Menu Item */}
                    <MenuItem value="" disabled selected>
                      Select a location
                    </MenuItem>
                    <MenuItem value="location1">Location 1</MenuItem>
                    <MenuItem value="location2">Location 2</MenuItem>
                    <MenuItem value="location3">Location 3</MenuItem>
                  </TextField>
                </Box>
              </Grid>
              {/* Start Date Picker */}
              <Grid item xs={12} sm={6}>
                <Box>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="s-date"
                  >
                    Start Date
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      placeholder="Start Date"
                      slotProps={{
                        textField: {
                          size: "small",
                          variant: "outlined",
                        },
                      }}
                      sx={{
                        width: "100%",
                        backgroundColor: "transparent",
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#e4e4e7", // Default border color
                          },
                          "&:hover fieldset": {
                            borderColor: "secondary.main", // Border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "secondary.main", // Border color on hover
                          },
                        },
                      }}
                      slots={{
                        openPickerIcon: CalendarTodayIcon,
                      }}
                    />
                  </LocalizationProvider>
                </Box>
                <Grid Grid item xs={12} sm={24} sx={{ mt: 2 }}>
                  <CustomButton>Apply Filters</CustomButton>
                </Grid>
              </Grid>

              {/* End Date Picker */}
              <Grid item xs={12} sm={6}>
                <Box>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="e-date"
                  >
                    End Date
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      placeholder="End Date"
                      slotProps={{
                        textField: {
                          size: "small",
                          variant: "outlined",
                        },
                      }}
                      sx={{
                        width: "100%",
                        backgroundColor: "transparent",
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#e4e4e7", // Default border color
                          },
                          "&:hover fieldset": {
                            borderColor: "secondary.main", // Border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "secondary.main", // Border color on hover
                          },
                        },
                      }}
                      slots={{
                        openPickerIcon: CalendarTodayIcon,
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
};

export default FilterBar;

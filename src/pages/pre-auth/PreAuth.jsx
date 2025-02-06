import {
  Box,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import CustomButton from "../../components/button/CustomButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MainHeading from "../../components/main-heading";
import Search from "../../components/search-bar/SearchBar";
import StatusBadge from "../../components/status-badge";
import FilterBar from "../../components/filter-bar";
import FilterButtons from "../../components/filter-buttons";

const columns = [
  { field: "id", headerName: "#", width: 50 },
  { field: "preAuthID", headerName: "Pre Auth ID", width: 130 },
  { field: "locationName", headerName: "Location Name", width: 150 },
  { field: "patientName", headerName: "Patient Name", width: 150 },
  {
    field: "status",
    headerName: "Status",
    width: 200, // Changed to 200 for minimum width
    renderCell: (params) => {
      return <StatusBadge status={params.row.status} />;
    },
  },
  { field: "createdBy", headerName: "Created By", width: 130 },
  { field: "createdDate", headerName: "Created Date", width: 150 },
  { field: "updationInfo", headerName: "Updation Info", width: 150 },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => (
      <button class="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 rounded-md px-3 border border-[#e4e4e7]">
        View
      </button>
    ),
  },
];

const statuses = [
  "Requested Sent",
  "Partially Approved",
  "Approved",
  "Denied",
  "Complete",
  "Info Required",
  "Service not reviewed",
  "Not required",
  "Scheduled",
  "Approved - Not Scheduled",
];

const rows = [
  {
    id: 1,
    preAuthID: "PA001",
    locationName: "New York",
    patientName: "John Doe",
    status: getRandomStatus(),
    createdBy: "Admin",
    createdDate: "2024-02-01",
    updationInfo: "N/A",
  },
  {
    id: 2,
    preAuthID: "PA002",
    locationName: "Los Angeles",
    patientName: "Jane Smith",
    status: getRandomStatus(),
    createdBy: "Dr. Brown",
    createdDate: "2024-02-02",
    updationInfo: "Updated by Dr. Smith",
  },
  {
    id: 3,
    preAuthID: "PA003",
    locationName: "Chicago",
    patientName: "Michael Lee",
    status: getRandomStatus(),
    createdBy: "Admin",
    createdDate: "2024-02-03",
    updationInfo: "Revised",
  },
  {
    id: 4,
    preAuthID: "PA004",
    locationName: "Houston",
    patientName: "Emily Johnson",
    status: getRandomStatus(),
    createdBy: "Dr. Davis",
    createdDate: "2024-02-04",
    updationInfo: "Under review",
  },
  {
    id: 5,
    preAuthID: "PA005",
    locationName: "Phoenix",
    patientName: "Robert Brown",
    status: getRandomStatus(),
    createdBy: "Dr. White",
    createdDate: "2024-02-05",
    updationInfo: "Finalized",
  },
  {
    id: 6,
    preAuthID: "PA006",
    locationName: "San Diego",
    patientName: "David Miller",
    status: getRandomStatus(),
    createdBy: "Admin",
    createdDate: "2024-02-06",
    updationInfo: "Awaiting response",
  },
  {
    id: 7,
    preAuthID: "PA007",
    locationName: "Dallas",
    patientName: "Sarah Wilson",
    status: getRandomStatus(),
    createdBy: "Dr. Thomas",
    createdDate: "2024-02-07",
    updationInfo: "Insufficient details",
  },
  {
    id: 8,
    preAuthID: "PA008",
    locationName: "San Francisco",
    patientName: "Chris Taylor",
    status: getRandomStatus(),
    createdBy: "Dr. Harris",
    createdDate: "2024-02-08",
    updationInfo: "Reviewed and accepted",
  },
  {
    id: 9,
    preAuthID: "PA009",
    locationName: "Austin",
    patientName: "Jessica Martinez",
    status: getRandomStatus(),
    createdBy: "Admin",
    createdDate: "2024-02-09",
    updationInfo: "Processing",
  },
  {
    id: 10,
    preAuthID: "PA010",
    locationName: "Seattle",
    patientName: "Daniel Anderson",
    status: getRandomStatus(),
    createdBy: "Dr. Walker",
    createdDate: "2024-02-10",
    updationInfo: "Incorrect submission",
  },
  {
    id: 11,
    preAuthID: "PA011",
    locationName: "Denver",
    patientName: "Sophia Thomas",
    status: getRandomStatus(),
    createdBy: "Dr. Young",
    createdDate: "2024-02-11",
    updationInfo: "Completed",
  },
  {
    id: 12,
    preAuthID: "PA012",
    locationName: "Miami",
    patientName: "Matthew Hernandez",
    status: getRandomStatus(),
    createdBy: "Admin",
    createdDate: "2024-02-12",
    updationInfo: "Awaiting documents",
  },
  {
    id: 13,
    preAuthID: "PA013",
    locationName: "Orlando",
    patientName: "Emma Garcia",
    status: getRandomStatus(),
    createdBy: "Dr. Scott",
    createdDate: "2024-02-13",
    updationInfo: "Verified",
  },
  {
    id: 14,
    preAuthID: "PA014",
    locationName: "Boston",
    patientName: "James Robinson",
    status: getRandomStatus(),
    createdBy: "Dr. Adams",
    createdDate: "2024-02-14",
    updationInfo: "Resubmit required",
  },
  {
    id: 15,
    preAuthID: "PA015",
    locationName: "Portland",
    patientName: "Ava Clark",
    status: getRandomStatus(),
    createdBy: "Admin",
    createdDate: "2024-02-15",
    updationInfo: "Waiting for approval",
  },
  {
    id: 16,
    preAuthID: "PA016",
    locationName: "Las Vegas",
    patientName: "Liam Lewis",
    status: getRandomStatus(),
    createdBy: "Dr. Hall",
    createdDate: "2024-02-16",
    updationInfo: "Updated by Dr. Hall",
  },
  {
    id: 17,
    preAuthID: "PA017",
    locationName: "Atlanta",
    patientName: "Olivia Walker",
    status: getRandomStatus(),
    createdBy: "Dr. Allen",
    createdDate: "2024-02-17",
    updationInfo: "Processing",
  },
  {
    id: 18,
    preAuthID: "PA018",
    locationName: "Philadelphia",
    patientName: "Benjamin King",
    status: getRandomStatus(),
    createdBy: "Dr. Lewis",
    createdDate: "2024-02-18",
    updationInfo: "Incomplete info",
  },
  {
    id: 19,
    preAuthID: "PA019",
    locationName: "Charlotte",
    patientName: "Mia Perez",
    status: getRandomStatus(),
    createdBy: "Admin",
    createdDate: "2024-02-19",
    updationInfo: "Final approval",
  },
  {
    id: 20,
    preAuthID: "PA020",
    locationName: "Detroit",
    patientName: "Lucas Green",
    status: getRandomStatus(),
    createdBy: "Dr. Carter",
    createdDate: "2024-02-20",
    updationInfo: "Pending verification",
  },
];

function getRandomStatus() {
  return statuses[Math.floor(Math.random() * statuses.length)];
}

const paginationModel = { page: 0, pageSize: 10 };

const PreAuth = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="space-y-6">
      <Stack spacing={3}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: { xs: "flex-start", md: "space-between" },
          }}
        >
          <MainHeading>Pre Auth Requests</MainHeading>

          <Box
            sx={{
              ml: "auto",
              width: { xs: "100%", md: "auto" },
              mb: { xs: 2, md: 0 },
            }}
          >
            <Search placeholder="Search by pre auth id, clinic, or patient name" />
          </Box>

          <CustomButton
            startIcon={<AddRoundedIcon />}
            sx={{
              width: { xs: "100%", md: "auto" },
              mt: { xs: 2, md: 0 },
              alignSelf: { xs: "flex-start", md: "center" },
            }}
          >
            New Pre Auth
          </CustomButton>
        </Box>

        <Box>
          <FilterButtons />
        </Box>
        <Box>
          <FilterBar />
        </Box>
        <Box sx={{ overflowX: "auto" }}>
          <Paper
            sx={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              border: "1px solid rgb(228, 228, 231)",
              boxShadow: "none",
              overflow: "hidden",
            }}
          >
            <TableContainer sx={{ maxHeight: "65vh" }}>
              <Table stickyHeader aria-label="pre auth requests table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.field}
                        sx={{
                          backgroundColor: "#FAFAFA",
                          borderBottom: "1px solid #E4E4E7",
                          color: "#71717A",
                        }}
                      >
                        {column.headerName}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow hover key={row.id}>
                        {columns.map((column) => (
                          <TableCell
                            key={column.field}
                            sx={{
                              borderBottom: "1px solid #E4E4E7",
                              backgroundColor: "#FAFAFA",
                              color: "#09090b",
                            }}
                          >
                            {column.renderCell
                              ? column.renderCell({ row })
                              : row[column.field]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[10, 20]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Stack>
    </div>
  );
};

export default PreAuth;

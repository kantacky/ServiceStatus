import {
  Box,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { Kantacky, Noiby, Keiz, ChatLab, BuLo } from "./TabPanels";
import logo from "./logo512.png";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [tab, setTab] = React.useState(0);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid item sx={{ my: 1 }}>
              <img src={logo} alt="logo" width="40" />
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ my: 1 }}>
                Kantacky Service Status
              </Typography>
            </Grid>
          </Grid>

          <Tabs value={tab} onChange={handleChangeTabs}>
            <Tab label="Kantacky" {...a11yProps(0)} />
            <Tab label="Noiby" {...a11yProps(1)} />
            <Tab label="Keiz!" {...a11yProps(2)} />
            <Tab label="ChatLab" {...a11yProps(3)} />
            <Tab label="BuLo" {...a11yProps(4)} />
          </Tabs>

          <TabPanel value={tab} index={0}>
            <Kantacky />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Noiby />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Keiz />
          </TabPanel>
          <TabPanel value={tab} index={3}>
            <ChatLab />
          </TabPanel>
          <TabPanel value={tab} index={4}>
            <BuLo />
          </TabPanel>
        </Stack>
      </Container>
    </>
  );
}

export default App;

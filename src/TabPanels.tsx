import { Grid } from "@mui/material";
import ServiceCard from "./ServiceCard";

export const Kantacky = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ServiceCard name="Portfolio" domain="www.kantacky.com" state={1} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ServiceCard name="REST API" domain="api.kantacky.com" state={0} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ServiceCard
            name="pgAdmin4"
            domain="pgadmin.kantacky.com"
            state={0}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ServiceCard name="Adminer" domain="adminer.kantacky.com" state={0} />
        </Grid>
      </Grid>
    </>
  );
};

export const Noiby = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ServiceCard name="Noiby" domain="www.noiby.com" state={2} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ServiceCard name="Single Sign-On" domain="sso.noiby.com" state={2} />
        </Grid>
      </Grid>
    </>
  );
};

export const Keiz = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ServiceCard name="Keiz!" domain="www.ag-keiz.com" state={1} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ServiceCard name="KD System" domain="kd.ag-keiz.com" state={2} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ServiceCard name="REST API" domain="api.ag-keiz.com" state={2} />
        </Grid>
      </Grid>
    </>
  );
};

export const ChatLab = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ServiceCard name="ChatLab" domain="www.chatlab.space" state={2} />
        </Grid>
      </Grid>
    </>
  );
};

export const BuLo = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ServiceCard name="Keiz!" domain="www.bulo.app" state={2} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ServiceCard name="REST API" domain="api.bulo.app" state={2} />
        </Grid>
      </Grid>
    </>
  );
};

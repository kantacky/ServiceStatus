import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  CheckCircleOutline,
  ErrorOutline,
  HighlightOff,
} from "@mui/icons-material";

interface ServiceCardProp {
  name: string;
  domain: string;
  state: number;
}

function ServiceCard(props: ServiceCardProp) {
  const { name, domain, state, ...other } = props;

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <Stack spacing={1}>
                <Box sx={{ height: 10 }}></Box>
                {state === 0 ? (
                  <CheckCircleOutline
                    sx={{
                      color: "#1e8e3e",
                    }}
                  />
                ) : state === 1 ? (
                  <ErrorOutline
                    sx={{
                      color: "#ffa500",
                    }}
                  />
                ) : (
                  <HighlightOff
                    sx={{
                      color: "#ff0000",
                    }}
                  />
                )}
              </Stack>
            </Grid>
            <Grid item>
              <Stack spacing={1}>
                <Typography variant="caption">{domain}</Typography>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="caption">
                  {state === 0
                    ? "Active"
                    : state === 1
                    ? "There are some problems"
                    : "Inactive"}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container spacing={2}>
            <Grid item></Grid>
            <Grid item>
              <Button
                size="small"
                onClick={() => {
                  window.open(`https://${domain}`, "_blank", "noreferrer");
                }}
              >
                Go To The Website
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}

export default ServiceCard;

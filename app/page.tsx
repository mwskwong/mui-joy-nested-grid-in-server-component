"use client";

import { Box, Grid, Sheet } from "@mui/joy";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={24}>
        <Grid xs={8}>
          <Sheet>xs=8/24</Sheet>
        </Grid>
        <Grid container xs={16}>
          <Grid xs={12}>
            <Sheet>nested xs=12/24</Sheet>
          </Grid>
          <Grid xs={12}>
            <Sheet>nested xs=12/24</Sheet>
          </Grid>
        </Grid>
        <Grid xs={8}>
          <Sheet>xs=8/24</Sheet>
        </Grid>
        <Grid container xs={16} columns={12}>
          <Grid xs={6}>
            <Sheet>nested xs=6/12</Sheet>
          </Grid>
          <Grid xs={6}>
            <Sheet>nested xs=6/12</Sheet>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

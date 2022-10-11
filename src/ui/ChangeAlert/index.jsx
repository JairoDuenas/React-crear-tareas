import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <Stack >
        <Stack className="ChangeAlert-container">
          <Typography>
            Parece que hay cambios en otra pestaña o ventana
          </Typography>
          <Typography>
            ¿Quiere sincronizar los cambios?
          </Typography>
          <Button
            onClick={() => toggleShow(false)}
          >
            Sincronizar
          </Button>
        </Stack>
      </Stack>
    );
  } else {
    return null;
  }
}


export { ChangeAlert };
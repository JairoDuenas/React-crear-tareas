import { Card } from "@mui/material";
import React from "react";

function TodoHeader({ children, loading }) {
  return (
    <Card
      sx={{
        width: '100%',
        height: '12rem',
        background: '#b2dfdb',
        borderRadius: '10px'
      }}
      >
      {  
        React.Children
        .toArray(children)
        .map(child => React.cloneElement(child, { loading }))
      }
    </Card>
  );
}

export { TodoHeader };
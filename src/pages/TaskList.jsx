
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { data } from "../data/data.js"


function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function TaskList() {


  return (
    <Box sx={{ p: 3 }}>
      {data.map((item, index) => (
        <Box key={index} mb={3}>
          <Typography variant="h4" style={{ paddingBottom: "15px" }}>{item.workingStream}</Typography>
          <Grid container spacing={2}>
            {item.tasks.map((task, idx) => (
              <Grid item xs={12} md={12} lg={7} key={idx}>
                <Paper sx={{ p: 1 }} color="primary">
                  <Typography variant="body2" >
                    <Tooltip title="Click to copy" arrow>
                      <IconButton color="primary" size="medium" sx={{ mr: 1 }} onClick={() => copyToClipboard(task)}>
                        <FileCopyIcon />
                      </IconButton>
                    </Tooltip>
                    <span>{task}</span>
                  </Typography>
                </Paper>
              </Grid>

            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default TaskList;


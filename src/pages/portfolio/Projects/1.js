import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from "../../../content_option";
import { Box, Paper,Stack } from '@mui/material';

export default function Project1(){
    return(
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ padding: 1, width: '100%' }}>
      
        
        <Stack spacing={1}>
        <Paper 
        elevation={15} 
        sx={{ padding: 4, width: '100%' }}>
            Jgbc 
        </Paper>
        <ImageList  cols={2} >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Stack>
      </Box>
    );
}
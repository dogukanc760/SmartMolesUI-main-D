import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { Typography } from '@mui/material';

const NestedItem = ({ children, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <List>
      <ListItem button onClick={handleIsOpen}>
        <ListItemText primary={children} />
      </ListItem>
      <Collapse in={isOpen}>
        <List>
          <ListItem button>
            <Typography style={{ textAlign: 'center' }} gutterBottom>
              <ListItemText style={{ textAlign: 'center' }}>{text} </ListItemText>
            </Typography>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default NestedItem;

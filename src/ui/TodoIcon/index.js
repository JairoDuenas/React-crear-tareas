import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <TaskAltIcon
      fontSize='large'
      className="Icon-svg Icon-svg--check"
      fill={color} />
  ),
  "edit": color => (
    <EditIcon
      sx={{
        '&:hover': {
          color: '#03a9f4',
          cursor: 'hand'
        },
        marginRight: '30px'
      }}
      fontSize='large'
      fill={color} />
  ),
  "delete": color => (
    <DeleteIcon
      fontSize='large'
      className="Icon-svg Icon-svg--delete"
      fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
import { styled } from 'styled-components';

export const ContactsList = styled('ul')(() => {
  return {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    fontWeight: 'bold',

    '& li': {
      display: 'flex',
      gap: 15,
    },

    '& button': {
      width: 50,
      marginLeft: 'auto',
      cursor: 'pointer',
      transition: 'background-color 200ms linear',

      '&:hover': {
        color: 'white',
        backgroundColor: 'teal',
      },
    },
  };
});

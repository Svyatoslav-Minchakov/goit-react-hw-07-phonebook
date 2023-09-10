import { styled } from 'styled-components';

export const PageForm = styled('form')(() => {
  return {
    border: '1px solid grey',
    borderRadius: 4,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 20,
    boxShadow:
      '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset',
    marginBottom: 30,

    '& label': {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },

    '& input': {
      height: 25,
      borderRadius: 5,
      border: '1px solid darckgrey',
      fontSize: 20,
    },

    '& button': {
      height: 30,
      alignSelf: 'center',
      borderRadius: 5,
      marginTop: 10,
      cursor: 'pointer',
      transition: 'background-color 200ms linear',

      '&:hover': {
        backgroundColor: 'teal',
        color: 'white',
      },
    },
  };
});

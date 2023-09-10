import { styled } from 'styled-components';

export const FilterContainer = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',

    '& label': {
      display: 'flex',
      flexDirection: 'column',
      fontWeight: 'bold',
      gap: 10,
      width: '100%',
      alignItems: 'center',
    },

    '& input': {
      height: 25,
      width: '80%',
      fontSize: 20,
    },
  };
});

import styled from 'styled-components';

export const Container = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: 500,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2)',
    padding: 20,
    backgroundColor: 'rgba(133, 228, 196, 0.247)',

    '& h2': {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: 'rgba(66, 131, 109, 0.911)',
    },
  };
});

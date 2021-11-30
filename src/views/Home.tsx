import { Grid, InputLabel } from '@material-ui/core';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { useRegister } from '../hooks/useContract';
import Layout from './Layout';
import Typography from '@mui/material/Typography';
import { TextField, MenuItem, Select, FormControl, Button } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home = () => {
  const context = useWeb3React<Web3Provider>();
  const { library, account } = context;
  const registerContract = useRegister();

  const setInfoContract = async () => {
    await registerContract.setInfo('Hello, Contract!');
  };

  return (
    <Layout>
      <Typography
        variant='h3'
        fontWeight='bold'
      >🥝 Welcome to Kiwiswap
      </Typography>
      <br />
      <Grid container spacing={1}>
        {!!(library && account) && (
          <Grid item>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 100 }}>
              <InputLabel id='test'>Test Message</InputLabel>
              <Button
                variant='contained'
                color='inherit'
                onClick={() => {
                  library
                    ?.getSigner(account)
                    .signMessage('👋 Hello World!')
                    .then((signature: any) => {
                      window.alert(`Success!\n${signature}`);
                    })
                    .catch((error: any) => {
                      window.alert(
                        'Failure!' + '\n' +
                        (error && error.message ? `${error.message}` : ''));
                    }
                    );
                }}
              >
                💌 Send
              </Button>
            </FormControl>
          </Grid>
        )}
      </Grid>
      <br />
      <Grid container spacing={2}>
        {!!(library && account) && (
          <Grid item>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 125 }}>
              <InputLabel id='currency'>Currency</InputLabel>
              <Select
                variant='outlined'
                defaultValue={'eth'}
              >
                <MenuItem value={'eth'}>ETH</MenuItem>
                <MenuItem value={'krw'}>KRW</MenuItem>
                <MenuItem value={'usd'}>USD</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 125 }}>
              <InputLabel id='Amount'>Amount</InputLabel>
              <TextField
                id='outlined-number'
                type='number'
                defaultValue={'0'}
                InputLabelProps={{
                  shrink: true,
                }}
              >
              </TextField>
            </FormControl>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={1}>
        {!!(library && account) && (
          <Grid item>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 250 }}>
              <Button variant='text'
                endIcon={<ArrowDownwardIcon />}
                disabled
              >
              </Button>
            </FormControl>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={2}>
        {!!(library && account) && (
          <Grid item>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 125 }}>
              <Select
                variant='outlined'
                defaultValue={'eth'}
              >
                <MenuItem value={'eth'}>ETH</MenuItem>
                <MenuItem value={'krw'}>KRW</MenuItem>
                <MenuItem value={'usd'}>USD</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 125 }}>
              <TextField
                id='outlined-number'
                type='number'
                defaultValue={'0'}
                InputLabelProps={{
                  shrink: true,
                }}
              >
              </TextField>
            </FormControl>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={1}>
        {!!(library && account) && (
          <Grid item>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 365 }}>
              <Button
                variant='contained'
                color='success'
                size='large'
                startIcon={<CompareArrowsIcon />}
                onClick={() => {
                  setInfoContract();
                }}
              >
                Swap !
              </Button>
            </FormControl>
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

export default Home;

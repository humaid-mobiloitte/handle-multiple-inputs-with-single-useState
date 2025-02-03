import {AppBar, Toolbar,Typography} from '@mui/material';
import HolidayVillageRoundedIcon from '@mui/icons-material/HolidayVillageRounded';

export default function TopNavBar(){
    return(
        <AppBar sx={{ backgroundColor: 'transparent', boxShadow:'none'}}>
            <Toolbar style={{backgroundColor:'rgba(0,0,0,0)',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                <HolidayVillageRoundedIcon fontSize='large'/>
                <Typography variant='h5'>Holiday Company</Typography>
            </Toolbar>
        </AppBar>   
    )
}
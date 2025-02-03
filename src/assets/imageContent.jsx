import {Grid} from '@mui/material';
import styles from './styling/styles';
export default function ImageContent(){
    return(
        <Grid item xs={12} md={6} sx={styles.imageContainer}>
            <img
              src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
              alt="Signup"
              style={styles.image}
            />
        </Grid>
    )
}
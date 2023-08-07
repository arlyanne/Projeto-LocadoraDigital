import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import styles from './CapaFilme.module.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { VITE_IMG } from '../../global/api_const';

interface Props {
  capa: string
  titulo: string
  data: string
  popularidade: string
  url: string
 
 }

function CapaFilme(props: Props) {

  return (
    <div>
      <Link className={styles.link} to={props.url}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="500"
              image={VITE_IMG+props.capa} alt="Uma menina segurando Livros"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {moment(props.data).format('DD/MM/YYYY')}  <Chip label={props.popularidade} /> 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}

export default CapaFilme;

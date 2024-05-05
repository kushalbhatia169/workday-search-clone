import Button from '@mui/material/Button/Button';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import Typography from '@mui/material/Typography/Typography';
import NoImage from "../../../assets/No_image_available.svg";
import { JobCardData } from '../../../types/job-cards.types';

const JobCard = (props: JobCardData) => {

  return (
    <Card>
      <CardMedia image={props.logoUrl || NoImage} title={props.companyName || ""} />
      <div>
        <Typography variant="h6">{props.companyName}</Typography>
        <Typography variant="body2">{props.jobRole}</Typography>
        <Typography variant="body2">{props.location}</Typography>
      </div>
      <div>
        <Typography>Estimated Salary:</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{props.salaryCurrencyCode}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{props.maxJdSalary}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{props.minJdSalary}</Typography> LPA
      </div>
      <Typography gutterBottom variant="h5" component="h2">About Company</Typography>
      <CardContent>
        <Typography variant='caption' color="textSecondary" component="p">About us</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{props.jobDetailsFromCompany}</Typography>
      </CardContent>
      <Typography gutterBottom variant="h5" component="h2">Minimum Experience</Typography>
      <Typography gutterBottom variant="h5" component="h2">{props.minExp} Years</Typography>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {}}>Easy Apply</Button>
        <Button size="small" color="primary" onClick={() => {}}>Unlock Referal Asks</Button>
      </CardActions>
    </Card>
  );
};

export default JobCard

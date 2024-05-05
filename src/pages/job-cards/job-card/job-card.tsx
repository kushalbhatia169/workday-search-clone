import Button from '@mui/material/Button/Button';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import NoImage from "../../../assets/No_image_available.svg";
import { JobCardData } from '../../../types/job-cards.types';
import styles from "./job-card.module.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Avatar } from '@mui/material';

const JobCard = (props: JobCardData) => {

  return (
    <Card className={styles.card}>
      <div className={`${styles.header} ms-2`}>
        <div className={styles.imageDiv}>
          <img className={styles.media} src={props.logoUrl || NoImage} title={props.companyName || ""} height={64} width={40}/>
        </div>
        <div className={`${styles.overlay} mt-2`}>
          <Typography variant="h3">{props.companyName}</Typography>
          <Typography variant="h2">{props.jobRole}</Typography>
          <div>
            <Typography variant="body2" className={styles.locationText}>{props.location}</Typography>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <Typography variant="body2" className={styles.estimatedSalary}>
          Estimated Salary: {props.salaryCurrencyCode === "USD" ? "$" : props.salaryCurrencyCode}
            &nbsp;{props.maxJdSalary} {props.minJdSalary && `- ${props.minJdSalary}`} LPA &nbsp;
          <CheckBoxIcon htmlColor='green'/>
        </Typography>

      </div>
      <Typography gutterBottom variant="h5" component="h2">About Company</Typography>
      <CardContent>
        <Typography variant='caption' color="textSecondary" component="p">About us</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{props.jobDetailsFromCompany}</Typography>
      </CardContent>
      <Typography gutterBottom variant="h5" component="h2">Minimum Experience</Typography>
      <Typography gutterBottom variant="h5" component="h2">{props.minExp} Years</Typography>
      <CardActions className={styles.cardActions}>
        <Button variant="contained" fullWidth className={`${styles.applyButton} ms-2`} onClick={() => {}}>⚡ Easy Apply</Button>
        <Button variant="contained" fullWidth className={`${styles.referalAsk} mt-2`} onClick={() => {}}>
          <Avatar srcSet='https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group.png'/>
          &nbsp;
          <Avatar srcSet='https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group(1).png' />
          &nbsp;
          Unlock Referal Asks
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard

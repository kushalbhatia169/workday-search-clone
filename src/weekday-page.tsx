import { Container } from '@mui/material';
import JobCards from './pages/job-cards/job-cards';
import { testData } from './test-data';

const WeekdayPage = () => {

  return (
    <Container maxWidth="lg">
      <JobCards jobCardsData={testData.jdList}/>
    </Container>
  )
}

export default WeekdayPage;

import JobCards from './pages/job-cards/job-cards';
import { testData } from './test-data';

const WeekdayPage = () => {

  return (
    <JobCards jobCardsData={testData.jdList}/>
  )
}

export default WeekdayPage;

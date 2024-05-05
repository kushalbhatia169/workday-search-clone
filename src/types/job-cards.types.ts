export interface JobCardData {
  jdUid: string | null;
  jdLink: string | null;
  jobDetailsFromCompany: string | null;
  maxJdSalary: number | null;
  minJdSalary: number | null;
  salaryCurrencyCode: string | null;
  location: string | null;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string | null;
  companyName: string | null;
  logoUrl: string | null;
}

export interface JobCardsProps {
  jobCardsData: JobCardData[];
}
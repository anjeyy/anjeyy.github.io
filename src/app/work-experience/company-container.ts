export interface CompanyContainer {
  companyName: string;
  slogan: string;
  role: string;
  industry: string;
  period: string;
  description: string;
  icon: string;
  buttonIcon: string;
  url: string;
}

export const placeholderContainer: CompanyContainer = {
  companyName: 'companyName',
  slogan: 'slogan',
  role: 'role',
  industry: 'industry',
  period: 'period',
  description: 'description',
  icon: 'icon',
  buttonIcon: 'button icon',
  url: 'url',
};

export const myCompanyContainer: CompanyContainer[] = [
  {
    companyName: 'WM Gruppe',
    slogan: 'digital service partner for the finance industry',
    role: 'senior software engineer',
    industry: 'finance industry',
    period: '01.01.2021 - now',
    description: 'my job description here',
    icon: 'attach_money',
    buttonIcon: 'wmgruppe-dark',
    url: 'https://www.wmgruppe.de/index.php',
  },
  {
    companyName: 'Techem Energy Services',
    slogan: 'digital service partner for the real estate industry',
    role: 'software engineer',
    industry: 'energy real estate industry',
    period: '01.07.2019 - 31.12.2020',
    description: 'my job description here',
    icon: 'house',
    buttonIcon: 'techem-dark',
    url: 'https://www.techem.com/corp/en',
  },
  {
    companyName: 'SINOVO business solutions',
    slogan: 'digital service partner various businesses',
    role: 'software engineer',
    industry: 'software consultancy',
    period: '01.09.2018 - 30.06.2019',
    description: 'my job description here',
    icon: 'computer',
    buttonIcon: 'sinovo-dark',
    url: 'https://www.sinovo.de/de/',
  },
];

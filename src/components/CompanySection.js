import Department from './Department';
function CompanySection({ company }) {
  return <section className="company-section"><div className="company-title"><h3>{company.name}</h3><p>{company.subtitle}</p></div>{company.groups.map((group) => <Department key={group.name} companyName={company.name} group={group} />)}</section>;
}
export default CompanySection;

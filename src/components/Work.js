import CompanySection from './CompanySection';
import { companies } from '../data/companies';

function Work() {
  return <section style={{color:"white"}} id="work" className="work section-pad"><div className="section-heading"><div><p className="section-label" style={{color:"#8b5cf6"}}>Selected work</p><h2 style={{color:"white"}}>Pages from the<br /><em>process.</em></h2></div><p style={{color:"white"}}>Collections, print stories and seasonal studies organised by the brands and departments they were created for.</p></div><div className="company-list">{companies.map((company) => <CompanySection key={company.name} company={company} />)}</div><p className="small-note" style={{color:"white"}}>A selection of presentation work. Full project details are available on request.</p></section>;
}
export default Work;

import { roles } from '../data/companies';

function Experience() {
  return <section id="experience" className="experience section-pad">
    <div className="experience-intro"><p className="section-label">Experience</p><h2>The work behind<br /><em>the point of view.</em></h2></div>
    <div className="role-list">{roles.map((role) => <article className="role" key={`${role.period}-${role.place}`}><p className="role-period">{role.period}</p><div><h3>{role.title}</h3><span>{role.place}</span></div><p className="role-detail">{role.detail}</p></article>)}</div>
  </section>;
}
export default Experience;

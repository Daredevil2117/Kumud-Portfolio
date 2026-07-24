import Arrow from './Arrow';

function ProjectCard({ companyName, groupName, season, title, description, slug }) {
  const pdfHref = `/assets/${slug}.pdf`;
  return <article className="project-card"><a href={pdfHref} target="_blank" rel="noreferrer" className="project-visual" aria-label={`Open ${title} PDF`}><img src={`/assets/${slug}-cover.png`} alt={`${title} cover`} /><span className="open-circle"><Arrow /></span><span className="project-number">{season}</span></a><div className="project-info"><p>{companyName} / {groupName}</p><h3>{title}</h3><span className="project-desc">{description}</span><a href={pdfHref} target="_blank" rel="noreferrer">View presentation <Arrow /></a></div></article>;
}
export default ProjectCard;

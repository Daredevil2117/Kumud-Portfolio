import ProjectCard from './ProjectCard';

function Department({ companyName, group }) {
  return <div className="department"><div className="department-title"><span>{group.name}</span>{group.note && <small>{group.note}</small>}</div>{group.projects && <div className="project-grid">{group.projects.map(([season, title, description, slug]) => <ProjectCard key={slug} companyName={companyName} groupName={group.name} season={season} title={title} description={description} slug={slug} />)}</div>}</div>;
}
export default Department;

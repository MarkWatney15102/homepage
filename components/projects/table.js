import Format from '../../lib/dateFormat';

function ProjectTableRow(project) {
  const from = Format(project.from);
  const to = Format(project.to);

  return <>
    <tr key={project.id}>
      <td>{project.id}</td>
      <td>{project.name}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td>
        <a href={"/projects/" + project.id} className={"btn btn-outline-primary"}>Zu Projekt</a>
      </td>
    </tr>
  </>;
}

export default ProjectTableRow

import Format from '../../lib/dateFormat';

function ProjectTableRow(project) {
  const from = Format(project.from);
  const to = Format(project.to);

  return <>
    <tr>
      <td>{project.id}</td>
      <td>{project.name}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td></td>
    </tr>
  </>;
}

export default ProjectTableRow

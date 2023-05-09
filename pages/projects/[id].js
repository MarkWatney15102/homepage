import Format from '../../lib/dateFormat'

function Project({project}) {
  const projectName = project.name ?? "";
  const description = project.description ?? "";

  const from = Format(project.from);
  const to = Format(project.to);

  return <>
    <br/>
    <div className={"container-fluid"}>
      <div className={"row justify-content-center"}>
        <div className="row">
          <div className="col-12 offset-md-2 col-md-8">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">{projectName}</h3>
              </div>
              <div className="card-body">
                <p>{description}</p>
              </div>
              <div className="card-footer text-muted pb-0 text-center">
                <p>Projektzeitraum: {from} bis {to}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export async function getServerSideProps(context) {
  const projectId = context.params.id;

  const url = "http://127.0.0.1:4000/api/ew/project/fetch/" + projectId;
  const res = await fetch(url);

  const json = await res.json();

  return {
    props: {
      project: json?.project ?? []
    }
  }
}

export default Project;
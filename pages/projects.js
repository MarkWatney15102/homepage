import ProjectTableRow from "../components/projects/table";

function Projects({projects}) {
  return <>
    <br/>
    <div className={"container-fluid"}>
      <div className={"row justify-content-center"}>
        <div className="col-12 col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Projekte</h3>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Projekt</th>
                  <th>Von</th>
                  <th>Bis</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                  {projects?.map(element => ProjectTableRow(element))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export async function getServerSideProps() {
  const url = "http://127.0.0.1:4000/api/ew/project/fetch/";
  const res = await fetch(url);

  const json = await res.json();

  return {
    props: {
      projects: json?.projects ?? []
    }
  }
}

export default Projects

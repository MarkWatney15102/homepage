import styles from '../../styles/Content.module.css'
import Image from "./image";

function Content(posts) {
  function calculateAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const postElements = posts.props;

  let htmlPhoto = "";
  if (postElements !== undefined) {
    htmlPhoto = <>
      <div className={"row justify-content-center"}>
        <div className={"col-12 col-md-8"}>
          <div className={"card"}>
            <div className={"card-header"}>
              <h3 className={"card-title"}>Fotografie</h3>
            </div>
            <div className={"card-body"}>
              <div className={"row rect-img-container"}>
                {postElements?.map(element => Image(element))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
  }

  return (
    <div className={"container-fluid"}>
      <div className={"row justify-content-center"}>
        <div className={"col-12 col-md-5"}>
          <div className={"card"}>
            <div className={"card-header"}>
              <h3 className={"card-title"}>Ein Informatiker stellt sich vor</h3>
            </div>
            <div className={"card-body"}>
              <p className="lead">Moin, ich bin <b>Eike Eric
                Wientjes</b>, {calculateAge('01-15-2002')} Jahre alt und bin gelernter Fachinformatiker
                für Anwedungsentwicklung</p>

              <h5>Mein Werdegang</h5>
              <p className="lead">
                Ich bin Ausgebildeter Fachinformatiker für Anwendungsentwicklung. Diese Ausbildung habe
                ich 2019 begonnen und anfang Juli 2022 erfolgreich abgeschlossen.
                Seit Oktober 2022 bin ich bei einem Unternehmen tätig, bei welchem ich für die Weiterentwicklung einer
                Lager- und Proktionsverwaltungssoftware zuständig bin.
              </p>

              <h5>Ehrenamt</h5>
              <p className="lead">
                Ich bin im Alter von 10 Jahren der Jugendfeuerwehr in Loga beigetreten. Mittlerweile bin
                ich auch schon fast 4 Jahre in der Einsatzabteilg tätig.
              </p>
            </div>
          </div>
        </div>
        <div className={"col-12 col-md-3"}>
          <div className={"card"}>
            <div className={"card-header"}>
              <h3 className={"card-title"}>Meine Ziele</h3>
            </div>
            <div className={"card-body"}>
              <ul className={styles.list}>
                <li>Webseite erweitern</li>
                <li>Fotografie Skills verbessern</li>
                <li>Einarbeiten in neue PHP und JS Frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {htmlPhoto}
    </div>
  );
}

export default Content;
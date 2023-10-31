import styles from '../../styles/Content.module.css'

function Content() {
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
                Wientjes</b>, 21 Jahre alt und bin gelernter Fachinformatiker
                für Anwedungsentwicklung.</p>

              <h5>Mein Werdegang</h5>
              <p className="lead">
                Ich bin Ausgebildeter Fachinformatiker für Anwendungsentwicklung. Diese Ausbildung habe
                ich 2019 begonnen und Anfang Juli 2022 erfolgreich abgeschlossen.
                Seit Oktober 2022 bin ich bei einem Unternehmen tätig, bei welchem ich für die Weiterentwicklung einer
                Lager- und Produktionsverwaltungssoftware zuständig bin.
              </p>

              <h5>Ehrenamt</h5>
              <p className="lead">
                Ich bin im Alter von 10 Jahren der Jugendfeuerwehr in Loga beigetreten. Mittlerweile bin
                ich auch schon fast 4 Jahre in der Einsatzabteilung tätig.
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
    </div>
  );
}

export default Content;

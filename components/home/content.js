import styles from '../../styles/Content.module.css'

function Content() {
  return (
    <div className={"container-fluid"}>
      <div className={"row"}>
        <div className={"col-12 col-md-6 offset-md-3"}>
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
        <div className='col-12 col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header'>
              <h3 className='card-title'>Mein Leben</h3>
            </div>
            <div className='card-body'>
              <h3>Pläne für 2024</h3>
              <ul className={styles.list}>
                <li>Webseite um neue Features erweitern</li>
                <li>Weitere Projekte voranbringen</li>
              </ul>
              <h3>2023</h3>
              <ul className={styles.list}>
                <li><b>Oktober</b>: Fullstack Developer bei Landguth</li>
              </ul>
              <h3>2022</h3>
              <ul className={styles.list}>
                <li><b>Juli</b>: Job wechsel nach der Ausbildung zur Landguth Heimtiernahrung GmbH als PHP-Entwickler</li>
                <li><b>Juli</b>: Ausbildung zum Fachinformatiker für Anwedungsentwicklung abgeschlossen</li>
              </ul>
              <h3>2021</h3>
              <ul className={styles.list}>
                <li><b>September</b>: Atemschutzlehrgang erfolgreich absolviert</li>
              </ul>
              <h3>2019</h3>
              <ul className={styles.list}>
                <li><b>August</b>: Ausbildung begonnen</li>
              </ul>
              <h3>2018</h3>
              <ul className={styles.list}>
                <li><b>August</b>: Jahrespraktikum im Bereich Informatiker begonnen</li>
                <li><b>Juli</b>: Realschule erfolgreich absolviert</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

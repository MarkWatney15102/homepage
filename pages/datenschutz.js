import Link from "next/link";

function Datenschutz() {
  return <>
    <br/>
    <div className={"container-fluid"}>
      <div className={"row justify-content-center"}>
        <div className={"col-12 col-md-5"}>
          <div className={"card"}>
            <div className={"card-header"}>
              <h3 className={"card-title"}>Datenschutzerklärung</h3>
            </div>
            <div className={"card-body"}>
              <h4>Allgemeiner Hinweis und Pflichtinformationen</h4>
              <br/>
              <h4>Benennung der verantwortlichen Stelle</h4>
              <br/>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>

              <ul>
                <li>Eike Eric Wientjes</li>
                <li>Zeppelinstraße 17</li>
                <li>26789 Leer</li>
              </ul>

              <p>
                Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der
                Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
              </p>

              <p><b>Widerruf Ihrer Einwilligung zur Datenverarbeitung</b></p>

              <p>
                Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein
                Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
                formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
                bleibt vom Widerruf unberührt.
              </p>

              <p><b>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</b></p>

              <p>
                Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der
                zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist
                der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet.
                Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:
                <a
                  href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>
              </p>

              <p><b>Recht auf Datenübertragbarkeit</b></p>

              <p>
                Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung
                erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen
                Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>

              <p><b>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</b></p>

              <p>
                Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche
                Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
                Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit
                über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
              </p>

              <p><b>SSL- bzw. TLS-Verschlüsselung</b></p>

              <p>
                Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als
                Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die
                Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte
                Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
              </p>

              <p><b>Server-Log-Dateien</b></p>

              <p>
                In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
              </p>

              <ul>
                <li>Besuchte Seite auf unserer Domain</li>
                <li>Datum und Uhrzeit der Serveranfrage</li>
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>IP-Adresse</li>
              </ul>

              <p>
                Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der
                Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
                Vertrags oder vorvertraglicher Maßnahmen gestattet.
              </p>

              <small>
                Quelle: Datenschutz-Konfigurator von <Link href="https://mein-datenschutzbeauftragter.de">https://mein-datenschutzbeauftragter.de</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Datenschutz;

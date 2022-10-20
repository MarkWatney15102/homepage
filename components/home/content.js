import styles from '../../styles/Content.module.css'

function Content() {
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

    return (
        <div className={"container-fluid"}>
            <div className={"row justify-content-center"}>
                <div className={"col-12 col-md-5"}>
                    <div className={"card"}>
                        <div className={"card-header"}>
                            <h3 className={"card-title"}>Über mich</h3>
                        </div>
                        <div className={"card-body"}>
                            <p className="lead">Moin, ich bin Eike Eric Wientjes, {calculateAge('01-15-2002')} Jahre alt und komme aus einer kleinen Stadt in Niedersachsen</p>

                            <p className="lead">
                                Ich habe 2019 mit meiner Ausbildung zum Fachinformatiker für Anwendungsentwicklung angefangen.
                                Diese Ausbildung habe ich im Juli 2022 erfolgreich abgeschlossen.
                            </p>
                            <p className="lead">
                                Ich bin seit ich 10 Jahre alt bin, bei der Freiwilligen Feuerwehr. Zuerst in der Jungendabteilung und seit 2019 auch in der Einsatzabteilung.
                                <br/>
                                <br/>
                                Folgende Lehrgänge habe ich absolviert:
                            </p>
                            <ul className={styles.list}>
                                <li>Truppmann Teil 1 + 2</li>
                                <li>Sprechfunk</li>
                                <li>Atemschutz</li>
                                <li>Jugendfeuerwehr Einstiegslehrgang</li>
                            </ul>
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
                                <li>Umgang mit Docker lernen</li>
                                <li>Webseite erweitern</li>
                                <li>Projekte weiterführen</li>
                                <li>Einarbeiten in Bun</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content

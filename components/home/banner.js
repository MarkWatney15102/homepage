import {NextPage} from 'next'
import Link from "next/link";

import styles from '../../styles/Banner.module.css'

function Banner () {
    return <>
        <div className="container-fluid backgroundColorStandard">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <Link href="/" className={styles.noDeco}><img src="/me.jpg" className={styles.profilePic} alt="Me"/></Link>
                    </div>
                    <div className="col-9">
                        <h1 className="display-4">Moin, ich bin <Link href="/"><a className={styles.noDeco}>Eike Eric Wientjes</a></Link>.</h1>
                        <br/>
                        <h6 className="lead desc">
                            <i>
                                / **
                                <br/>
                                &nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;@author <Link href="https://github.com/MarkWatney15102"><a className={styles.noDeco}>MarkWatney15102</a></Link>
                                <br/>
                                &nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;@version <b>1.0.0</b>
                                <br/>
                                &nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;@description Software Entwickler
                                <br/>
                                &nbsp;&nbsp;*/
                            </i>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Banner

import Link from "next/link";

function Impressum() {
  return <>
    <br/>
    <div className={"container-fluid"}>
      <div className={"row"}>
        <div className={"col-12 col-md-8 offset-2"}>
          <div className={"card"}>
            <div className={"card-header"}>
              <h3 className={"card-title"}>Bilder Galerie</h3>
            </div>
            <div className={"card-body"}>
              <div className="row">
                <div className="col-4 mb-4">
                  <Link href="/images/boot1.jpg" target="_blank"><img src="/images/boot1.jpg" alt="" className={"image"}/></Link>
                </div>
                <div className="col-4 mb-4">
                  <Link href="/images/boot2.jpg" target="_blank"><img src="/images/boot2.jpg" alt="" className={"image"}/></Link>
                </div>
                <div className="col-4 mb-4">
                  <Link href="/images/shooting_ludger.jpg" target="_blank"><img src="/images/shooting_ludger.jpg" alt="" className={"image"}/></Link>
                </div>
                <div className="col-4 mb-4">
                  <Link href="/images/shooting_ludger2.jpg" target="_blank"><img src="/images/shooting_ludger2.jpg" alt="" className={"image"}/></Link>
                </div>
                <div className="col-4">
                  <Link href="/me.jpg" target="_blank"><img src="/me.jpg" alt="" className={"image"}/></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}
  
export default Impressum
  
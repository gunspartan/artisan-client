import ServicesGrid from "../ServicesGrid";
import ServicesContent from "../ServicesContent";
import DesignElement from "../DesignElement";

export default function HomeContent() {
  return (
    <div className="container HomeContent">
      <div className="row gx-5 justify-content-between">
        <div className="col-lg-4 col-md-9 m-auto content-text">
          <div>
            <div className="content-title">
              <h1>Quality</h1>
              <hr />
              <h2 className="text-end">Craftsmanship</h2>
            </div>
            <div className="content-description">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                dolor nobis? Exercitationem incidunt reiciendis maxime amet
                placeat accusamus expedita omnis!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 services">
          <div className="row row-cols-2 justify-content-evenly gy-4">
            {ServicesContent.map((item, index) => {
              return (
                <div key={index} className="col">
                  <ServicesGrid image={item.image} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <DesignElement word="craftsmanship" cName="craftsmanship" />
    </div>
  );
}

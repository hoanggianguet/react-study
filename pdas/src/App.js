import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/image.jpg";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <p className="title">Title</p>
        </div>
      </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} 
              description="XXXXXXXXXXXXXXXXX"/>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={AlexaImage}
                description="XXXXXXXXXXXXXXXXX"
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" image={AlexaImage} 
              description="XXXXXXXXXXXXXXXXX"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

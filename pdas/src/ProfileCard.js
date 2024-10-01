function ProfileCard({ title, handle, image, description }) {
  // const {title, handle} = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="XXX"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">Title is {title}</p>
          <p className="subtitle is-6">Title is {handle}</p>
        </div>
        <div className="content">
            
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

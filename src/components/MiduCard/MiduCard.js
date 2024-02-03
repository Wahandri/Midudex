import "./MiduCard.css";

export default function MiduCard({ description, urlPost}) {
  return (
    <div className="">
        <h2>{description}</h2>
        <iframe className="boxMiduCard" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7153772127144325120?compact=1" height="599" width="800" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>
    </div>
  )
}

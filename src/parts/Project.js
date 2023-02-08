export default function Project({ projetInfo }) {
  console.log(projetInfo.name);
  return (
    <div>
      <h2>{projetInfo.name}</h2> // {projetInfo.mainLanguage}
      {projetInfo.thumbnail}
      {projetInfo.smallDesc}
    </div>
  );
}

import Card from "./card/Card";

export default function App() {
  const name = "Ms. Cat";
  const title = "Full-snack developer";
  const image = "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=750&h=750&dpr=1";
  
  return (
    <div className="flex h-screen items-center justify-center bg-blue">
      <Card name={name} title={title} image={image} />
    </div>
  );
}

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

type CardProps = {
  name: string;
  title: string;
  image: string;
};

function Card(props: CardProps) {
  return (
    <div className="flex h-80 w-80 flex-col items-center justify-center gap-1 rounded-lg bg-dark-blue shadow-2xl">
      <div>
        <img
          src={props.image}
          alt="logo"
          className="mx-auto h-32 w-32 rounded-full"
        />
        <h1 className="text-center text-3xl font-semibold text-white">
          {props.name}
        </h1>
        <p className="text-center text-white">{props.title}</p>
      </div>
      <hr className="mx-auto my-4 w-3/4 border-gray-500" />

      <div className="flex w-3/4 justify-around">
        <AiFillGithub className="text-3xl text-white hover:text-gray-50" />

        <AiFillLinkedin className="text-3xl text-white hover:text-gray-50" />

        <AiFillTwitterCircle className="text-3xl text-white hover:text-gray-50" />

        <AiFillYoutube className="text-3xl text-white hover:text-gray-50" />
      </div>
    </div>
  );
}

export default Card;

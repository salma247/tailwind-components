import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

type Props = {
  name: string;
  title: string;
  image: string;
  backgroundColor: string;
  textColor: string;
};

function Card(props: Props) {
  return (
    <div className={`flex flex-col items-center justify-center h-80 w-80 rounded-xl bg-${props.backgroundColor} shadow-2xl`}>
      <div>
        <img
          src={props.image}
          alt="logo"
          className="mx-auto h-32 w-32 rounded-full"
        />
        <h1 className={`text-center text-2xl font-bold text-${props.textColor}`}>
          {props.name}
        </h1>
        <p className={`text-center text-lg text-${props.textColor}`}> {props.title}</p>
      </div>
      <hr className={`w-3/4 my-4 border-${props.textColor}`} />

      <div className="flex w-3/4 justify-around">
        <AiFillGithub className={`text-3xl text-${props.textColor} hover:opacity-50`} />

        <AiFillLinkedin className={`text-3xl text-${props.textColor} hover:opacity-50`} />

        <AiFillTwitterCircle className={`text-3xl text-${props.textColor} hover:opacity-50`} />

        <AiFillYoutube className={`text-3xl text-${props.textColor} hover:opacity-50`} />
      </div>
    </div>
  );
}

export default Card;

import { NavLink } from "react-router-dom";

export function FooterIcons({ icon, onClick }) {
  const img = `./src/assets/${icon}.png`;
  let path = "";
  icon === "github"
    ? (path = "https://github.com/000kev")
    : (path = "https://www.linkedin.com/in/kevin-yves-gerard-k-1664a274/");

  if (icon === "email") {
    return (
      <button onClick={onClick}>
        <img
          className="mx-auto w-fit cursor-pointer md:cursor-pointer"
          src={img}
        />
      </button>
    );
  } else
    return (
      <NavLink to={path} end>
        <img
          className="mx-auto w-fit cursor-pointer md:cursor-pointer"
          src={img}
        />
      </NavLink>
    );
}

export default function Footer({ onClick }) {
  return (
    <>
    <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=BYuAMe0wH39siv3Frs7EfFnSNwVhtJJVrGX3htU9tM9KMSY9TFZb78OQAcFS"></script></span>
      <aside className="mt-20"> 
        <ul className="flex flex-row w-screen h-fit m-auto bg-gray-900 gap-x-5 justify-between">
          <FooterIcons onClick={onClick} icon="email" />
          <FooterIcons icon="github" />
          <FooterIcons icon="linkedin" />
        </ul>
      </aside>
    </>
  );
}

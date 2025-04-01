import { useState } from "react";
import logo from "./assets/icone-github.png";
import imageGithube from "./assets/nome-github.png";
import { Search } from "lucide-react";
import InfoUser from "./componentes/InfoUser";
import Spinner from "./componentes/Spinner";

function App() {
  const [user, setUSer] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [dados, setDados] = useState(null);
  const [onShow, setOnshow] = useState(false);

  const handleChange = (event) => {
    setUSer(event.target.value);
  };

  const handleSubmit = async () => {
    setOnshow(false);
    setIsLoading(true);
    setTimeout(async () => {
      if (user !== "") {
        const url = `https://api.github.com/users/${user}`;
        const response = await fetch(url);
        const data = await response.json();
        setDados(data);
        setUSer("");
      }
      setIsLoading(false);
      setOnshow(true);
    }, 2000);
  };

  console.log(dados);

  return (
    <div className="bg-[#1F1F1F] w-full h-screen relative overflow-x-hidden">
      <div className="size-[500px] absolute top-[-80px] right-[-80px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#005CFF_0%,_rgba(0,_0,_0,_0)_100%)]"></div>
      <div className="size-[450px] absolute top-[198px] left-[-290px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#005CFF_0%,_rgba(0,_0,_0,_0)_100%)]"></div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-[#000000] w-[80%] h-[75%] flex flex-col items-center z-10">
          <div className="h-[82px] w-[384px] flex items-center gap-3 mt-10 ">
            <img
              src={logo}
              alt="Logo do github"
              className="w-[58px] h-[58px]"
            />
            <h1 className="text-white text-[48px] font-bold">Perfil</h1>
            <img src={imageGithube} alt="Nome github" className="w-[160px]" />
          </div>
          <div className="mt-5 w-[500px] bg-[#FFFFFF] h-[62px] rounded-[10px] border border-[#DDDDDD] pl-4 flex justify-between">
            <input
              type="text"
              className="text-xl text-[#000] my-4 w-[255px] outline-none placeholder-[#000]"
              placeholder="Digite um usuário do Github"
              value={user}
              onChange={handleChange}
            />
            <button
              disabled={!user}
              onClick={handleSubmit}
              className="bg-[#005CFF]  px-4 rounded-[10px] text-white cursor-pointer  transition-all ease-linear hover:bg-[#0042CC] "
            >
              <Search size={28} />
            </button>
          </div>
          {isloading && <Spinner />}
          {onShow && <InfoUser dados={dados} />}
        </div>
      </div>
    </div>
  );
}

export default App;


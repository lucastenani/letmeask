import { useParams } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import "./style.scss";

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Room React</h1>
          <span>4 questions</span>
        </div>

        <form>
          <textarea placeholder="What do you want to ask?" />
          <div className="form-footer">
            <span>
              <button>Login</button> to submit a question
            </span>
            <Button type="submit">Send question</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

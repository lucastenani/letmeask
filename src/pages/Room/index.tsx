import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import "./style.scss";
import { database } from "../../services/firebase";
import { Link } from "react-router-dom";

type RoomParams = {
  id: string;
};

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState("");
  const roomId = params.id;

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    if (newQuestion.trim() === "") {
      alert("You must type something in the question");
      return;
    }

    if (!user) {
      throw new Error("You must be logged in");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion("");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <Link to={"/"}>
            <img src={logoImg} alt="Letmeask" />
          </Link>
          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Room React</h1>
          <span>4 questions</span>
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="What do you want to ask?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            <span>
              <button>Login</button> to submit a question
            </span>
            <Button type="submit" disabled={!user}>
              Send question
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

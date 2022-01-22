import { useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import "../../styles/room.scss";

import { Link } from "react-router-dom";
import { Question } from "../../components/Question";
import { useRoom } from "../../hooks/useRoom";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();

  const roomId = params.id!;
  const { title, questions } = useRoom(roomId);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <Link to={"/"}>
            <img src={logoImg} alt="Letmeask" />
          </Link>
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Close room</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>{title} Room</h1>
          {(() => {
            if (questions.length === 1) {
              return <span>{questions.length} question</span>;
            } else if (questions.length > 1) {
              return <span>{questions.length} questions</span>;
            }
          })()}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

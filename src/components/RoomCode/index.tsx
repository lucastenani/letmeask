import copyImg from "../../assets/images/copy.svg";
import "./style.scss";

type RoomCodeProps = {
  code: string | undefined;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomToClipboard() {
    navigator.clipboard.writeText(props.code!);
  }

  return (
    <button className="room-code" onClick={copyRoomToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Room #{props.code}</span>
    </button>
  );
}

import { useNavigate } from "react-router-dom";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import "../../styles/auth.scss";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../../services/firebase";

export function Home() {
  const navigate = useNavigate();
  const { user, sigInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function navigateToNewRoom() {
    if (!user) {
      await sigInWithGoogle();
    }

    navigate("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event?.preventDefault();

    if (roomCode.trim() === "") {
      alert("To enter a room you need to enter the code.");
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("This room does not exist.");
      return;
    }

    if (roomRef.val().endedAt) {
      alert("Room already closed.");
      return;
    }

    navigate(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Illustration symbolizing question and answers"
        />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Ask a real-time audience questions</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button id="create-room" onClick={navigateToNewRoom}>
            <img src={googleIconImg} alt="Google logo" />
            Create your room using Google
          </button>
          <div id="separator">or enter a room</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Enter room code"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Enter room</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

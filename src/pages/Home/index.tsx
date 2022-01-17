import { useNavigate } from "react-router-dom";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import "../../styles/auth.scss";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

export function Home() {
  const navigate = useNavigate();
  const { user, sigInWithGoogle } = useAuth();

  async function navigateToNewRoom() {
    if (!user) {
      await sigInWithGoogle();
    }

    navigate("/rooms/new");
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
          <form>
            <input type="text" placeholder="Enter room code" />
            <Button type="submit">Enter room</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

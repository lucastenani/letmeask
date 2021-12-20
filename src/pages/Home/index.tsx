import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import "./style.scss";

export function Home() {
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
          <button id="create-room">
            <img src={googleIconImg} alt="Google logo" />
            Create your room using Google
          </button>
          <div id="separator">or enter a room</div>
          <form>
            <input type="text" placeholder="Enter room code" />
            <button type="submit">Enter the room</button>
          </form>
        </div>
      </main>
    </div>
  );
}

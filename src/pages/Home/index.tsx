import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

export function Home() {
  return (
    <div>
      <aside>
        <img
          src={illustrationImg}
          alt="Illustration symbolizing question and answers"
        />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Ask a real-time audience questions</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={googleIconImg} alt="Google logo" />
            Create your room using Google
          </button>
          <div>or enter a room</div>
          <form>
            <input type="text" placeholder="Enter room code" />
            <button type="submit">Enter the room</button>
          </form>
        </div>
      </main>
    </div>
  );
}

import { ReactNode } from "react";
import "./style.scss";

type QuestionProps = {
  content: string;
  author: { name: string; avatar: string };
  children?: ReactNode;
};

export function Question({ content, author, children }: QuestionProps) {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={`${author} Photo`} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}

import {useState} from "react"

export function Article({ title, content }) {

  const [showContent, setShowContent] = useState(false)
  
  return (
    <div>
      <h1>{title} da</h1>
      <button onClick={() => setShowContent((showContent) => !showContent)}>Know {showContent ? "Less": "More"}</button>
      {
        showContent && <p>{content}</p>
      }
    </div>
  );
}

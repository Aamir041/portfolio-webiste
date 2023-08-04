import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./LeetcodeStat.css"

const LeetcodeStat = () => {
    return(
        <div className="leetcode-stat">
            <ReactMarkdown>
                ![LeetCode Stats](https://leetcard.jacoblin.cool/saudagar_aamir?theme=dark&font=Syne%20Mono&ext=heatmap)
            </ReactMarkdown>
        </div>
    )
}

export default LeetcodeStat;

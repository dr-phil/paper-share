import { useEffect } from "react";

const Comment = (i: number) => {
    return (
        <div style={{display:"flex"}}>
            {"Comment " + i + "!"}
            <div style={{border: 5}}>X</div>
        </div>
    );

}

function CommentBar({highlights}) {
    useEffect(() => {
        console.log(highlights);
    }, []);
    return (
        <div style={{display:"flex", flexDirection:"column", width: "50%", alignItems: "center"}}>
        {highlights.map((selection, i:number) => (
        //   <div key={i}>{"Comment " + i +"!"}</div>
            <>
                {Comment(i)}
            </>
        ))}
        </div>
    );
}

export default CommentBar;
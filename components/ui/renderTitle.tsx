import React from "react";

export const RenderTitle = (title: string) => {
    const parts = title.split("\n");
    return parts.map((part, lineIndex) => {
        if (lineIndex === parts.length - 1) {
            const words = part.split(" ");
            const lastWord = words[words.length - 1];
            const restOfWords = words.slice(0, -1).join(" ");
            return (
                <React.Fragment key={lineIndex}>
                    {lineIndex > 0 && <br />}
                    {restOfWords}{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                        {lastWord}
                    </span>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment key={lineIndex}>
                {lineIndex > 0 && <br />}
                {part}
            </React.Fragment>
        );
    });
};
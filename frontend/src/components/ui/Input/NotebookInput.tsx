import { useState } from "react";

function NotebookInput() {
    const [question, setQuestion] = useState("");

    return (
        <div className="w-full max-w-2xl">
            <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="✏️ What are we learning today?"
                rows={5}
                className="
          w-full
          resize-none
          rounded-3xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-6
          font-[var(--font-handwriting)]
          text-2xl
          text-[var(--color-text)]
          shadow-sm
          outline-none
          transition-all
          duration-200
          placeholder:text-[var(--color-text-muted)]
          focus:-translate-y-1
          focus:shadow-md
        "
            />

            <div className="mt-3 flex justify-end">
                <span className="font-[var(--font-text)] text-sm text-[var(--color-text-muted)]">
                    {question.length}/500
                </span>
            </div>
        </div>
    );
}

export default NotebookInput;
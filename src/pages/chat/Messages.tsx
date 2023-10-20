import { useEffect, useRef } from "react";

type Message = {
  id: string;
  message: string;
  sender_id: string;
  created_at: string;
};

type MessagesProps = {
  userId: string | undefined;
  isLoading: boolean;
  messages: Message[];
  players: Map<string, string>;
  isPrivate?: boolean;
};

const Messages = ({ messages, userId, players, isLoading }: MessagesProps) => {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  if (isLoading && !messages.length) {
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  }

  const parseDate = (date: any) => {
    const current = new Date();
    const today = current.toDateString();
    const yesterday = new Date(
      current.setDate(current.getDate() - 1)
    ).toDateString();

    return current.toDateString() === date.toDateString()
      ? `Today ${date.getHours()}:${(date.getMinutes() + "").padStart(2, "0")}`
      : yesterday === date.toDateString()
      ? `Yesterday ${date.getHours()}:${(date.getMinutes() + "").padStart(
          2,
          "0"
        )}`
      : ` ${date.getHours()}:${(date.getMinutes() + "").padStart(2, "0")}`;
  };

  return (
    <div ref={chatRef} className="max-h-full overflow-y-auto mb-6">
      {messages.length
        ? messages.map((message, index) => (
            <div
              key={index}
              className="flex justify-between py-3 mt-4 w-[18vw] rounded-md mx-auto px-2 group relative bg-blue-500/50"
            >
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <span
                    className={`font-semibold text-black  ${
                      message.sender_id === userId
                        ? "text-black "
                        : "text-black "
                    }`}
                  >
                    {players.get(message.sender_id)}
                  </span>
                  <span className="text-sm text-gray-600 ">
                    {parseDate(new Date(message.created_at))}
                  </span>
                </div>
                {message.message.split("\n").map((msg, idx) => (
                  <div key={idx} className="text-black">
                    {msg || "\u00A0"}
                  </div>
                ))}{" "}
              </div>
              {message.sender_id === userId ? (
                <div className="text-md text-gray-600 "></div>
              ) : null}
            </div>
          ))
        : null}
    </div>
  );
};

export default Messages;

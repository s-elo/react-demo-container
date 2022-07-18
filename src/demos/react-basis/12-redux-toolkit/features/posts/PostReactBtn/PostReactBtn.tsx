import React from "react";
// import { useDispatch } from "react-redux";
// import { reactionAdded } from "../postSlice";
import { PostData, ReactionNames } from "../post";
import { useAddReactionMutation } from "../../api/apiSlice";
import "./PostReactBtn.less";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export default function PostReactBtn({ post }: { post: PostData }) {
  // const dispatch = useDispatch();
  const [updataReaction] = useAddReactionMutation();

  return (
    <div className="react-btn-container">
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
          className="btn emoji-btn"
          key={name}
          onClick={() =>
            // dispatch(
            //   reactionAdded({ id: post.id, reactName: name as ReactionNames })
            // )

            updataReaction({ id: post.id, reactName: name as ReactionNames })
          }
        >
          {emoji}{" "}
          <span style={{ fontWeight: "bold" }}>
            {post.reactions[name as ReactionNames]}
          </span>
        </button>
      ))}
    </div>
  );
}

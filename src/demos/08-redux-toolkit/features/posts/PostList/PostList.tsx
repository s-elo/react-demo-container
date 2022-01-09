import { useEffect, ReactNode } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "../PostItem/PostItem";
import { selectPostIds, fetchPosts } from "../postSlice";
import { RootState } from "@/demos/08-redux-toolkit/store";
import { Spinner } from "@/component/Spinner/Spinner";
import { fetchUsers } from "../../users/userSlice";
import "./PostList.less";

export default function PostList() {
  const dispatch = useDispatch();

  const postIds = useSelector(selectPostIds);
  const postFetchStatus = useSelector((state: RootState) => state.posts.status);
  const postFetchError = useSelector((state: RootState) => state.posts.error);
  const userFetchStatus = useSelector((state: RootState) => state.users.status);

  useEffect(() => {
    if (postFetchStatus === "idle") {
      dispatch(fetchPosts());
    }

    if (userFetchStatus === "idle") {
      dispatch(fetchUsers());
    }
    // eslint-disable-next-line
  }, []);

  let renderedPosts: ReactNode;

  if (postFetchStatus === "loading") {
    renderedPosts = <Spinner text="Loading" />;
  } else if (postFetchStatus === "complete") {
    renderedPosts = postIds.map((postId) => (
      <PostItem postId={postId} key={postId} />
    ));
  } else if (postFetchStatus === "failed") {
    renderedPosts = <div>{postFetchError}</div>;
  }

  return <div className="post-list-container">{renderedPosts}</div>;
}

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchDataProfiles, SendDataProfiles } from "../Store/NewProfile-slice";
import { FetchDataPosts, SendDataPosts } from "../Store/NewPost-slice";
import { FetchDataComments, SendDataComments } from "../Store/Comment-slice";
import { FetchDataShares, SendDataShares } from "../Store/Share-slice";
import { FetchDataUpvotes, SendDataUpvotes } from "../Store/Upvote-slice";

let forProfile = true;
let forPost = true;
let forComment = true;
let forShare = true;
let forUpvote = true;

const SendFetchHook = () => {
  const profile = useSelector((state) => state.profile.profileArray);
  const post = useSelector((state) => state.post.newPostArray);
  const comment = useSelector((state) => state.comment.commentArray);
  const share = useSelector((state) => state.share.shareArray);
  const upvote = useSelector((state) => state.upvote.upvoteArray);

  const dispatch = useDispatch();

  useEffect(() => {
    if (forProfile) {
      dispatch(FetchDataProfiles());
      forProfile = false;
      return;
    }

    dispatch(SendDataProfiles(profile));
  }, [profile]);

  useEffect(() => {
    if (forPost) {
      dispatch(FetchDataPosts());
      forPost = false;
      return;
    }

    dispatch(SendDataPosts(post));
  }, [post]);

  useEffect(() => {
    if (forComment) {
      dispatch(FetchDataComments());
      forComment = false;
      return;
    }

    dispatch(SendDataComments(comment));
  }, [comment]);

  useEffect(() => {
    if (forShare) {
      dispatch(FetchDataShares());
      forShare = false;
      return;
    }

    dispatch(SendDataShares(share));
  }, [share]);

  useEffect(() => {
    if (forUpvote) {
      dispatch(FetchDataUpvotes());
      forUpvote = false;
      return;
    }

    dispatch(SendDataUpvotes(upvote));
  }, [upvote]);

  return null;
};

export default SendFetchHook;

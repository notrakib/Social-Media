import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchDataProfiles, SendDataProfiles } from "../Store/NewProfile-slice";
import { FetchDataPosts, SendDataPosts } from "../Store/NewPost-slice";
import { FetchDataComments, SendDataComments } from "../Store/Comment-slice";
import { FetchDataShares, SendDataShares } from "../Store/Share-slice";
import { FetchDataUpvotes, SendDataUpvotes } from "../Store/Upvote-slice";
import { signinAction } from "../Store/Signin-slice";
import { FetchDataFriends, SendDataFriends } from "../Store/Friends-slice";

let forProfile = true;
let forPost = true;
let forComment = true;
let forShare = true;
let forUpvote = true;
let forFriends = true;

const SendFetchHook = () => {
  const profile = useSelector((state) => state.profile.profileArray);
  const post = useSelector((state) => state.post.newPostArray);
  const comment = useSelector((state) => state.comment.commentArray);
  const share = useSelector((state) => state.share.shareArray);
  const upvote = useSelector((state) => state.upvote.upvoteArray);
  const signIn = useSelector((state) => state.signin.loginTime);
  const friends = useSelector((state) => state.friends.friendArray);

  const dispatch = useDispatch();

  useEffect(() => {
    const remainingTime = +new Date(signIn) + 3600000 - new Date();

    if (remainingTime < 0) {
      dispatch(signinAction.logout());
    }
  }, [signIn, dispatch]);

  useEffect(() => {
    if (forProfile) {
      dispatch(FetchDataProfiles());
      forProfile = false;
      return;
    }

    dispatch(SendDataProfiles(profile));
  }, [profile, dispatch]);

  useEffect(() => {
    if (forPost) {
      dispatch(FetchDataPosts());
      forPost = false;
      return;
    }

    dispatch(SendDataPosts(post));
  }, [post, dispatch]);

  useEffect(() => {
    if (forComment) {
      dispatch(FetchDataComments());
      forComment = false;
      return;
    }

    dispatch(SendDataComments(comment));
  }, [comment, dispatch]);

  useEffect(() => {
    if (forShare) {
      dispatch(FetchDataShares());
      forShare = false;
      return;
    }

    dispatch(SendDataShares(share));
  }, [share, dispatch]);

  useEffect(() => {
    if (forUpvote) {
      dispatch(FetchDataUpvotes());
      forUpvote = false;
      return;
    }

    dispatch(SendDataUpvotes(upvote));
  }, [upvote, dispatch]);

  useEffect(() => {
    if (forFriends) {
      dispatch(FetchDataFriends());
      forFriends = false;
      return;
    }

    dispatch(SendDataFriends(friends));
  }, [friends, dispatch]);

  return null;
};

export default SendFetchHook;

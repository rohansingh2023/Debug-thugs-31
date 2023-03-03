import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core/";
import ChatIcon from "@material-ui/icons/Chat";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
// import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import { useHistory } from "react-router-dom";


const BuyCard = ({ d }) => {
  const classes = useStyles();
  //   const history = useHistory();

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        // onClick={openPost}
      >
        <CardMedia
          className={classes.media}
          image={
            d.img ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title="Wheat"
        />
        <div className={classes.overlay}>
          <Typography variant="h6">2 kg</Typography>
          {/* <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography> */}
        </div>
        {/* {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && ( */}
        <div className={classes.overlay2} name="edit">
          <Button
            //   onClick={(e) => {
            //     e.stopPropagation();
            //     setCurrentId(post._id);
            //   }}
            style={{ color: "white" }}
            size="small"
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
        {/* )} */}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {d.quantity} kg
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {d.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {post.message.split(" ").splice(0, 20).join(" ")}... */}
            {d.location}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          //   disabled={!user?.result}
          //   onClick={() => dispatch(likePost(post._id))}
        >
          {/* <Likes /> */}
          <LocalMallIcon /> &nbsp; Buy
        </Button>
        {/* {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && ( */}
        <Button
          size="small"
          color="secondary"
          // onClick={() => dispatch(deletePost(post._id))}
        >
          <ChatIcon fontSize="small" /> &nbsp; Chat
        </Button>
        {/* )} */}
      </CardActions>
    </Card>
  );
};

export default BuyCard;

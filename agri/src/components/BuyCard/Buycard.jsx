import React from "react";
import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core/";
// import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ChatIcon from "@material-ui/icons/Call";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
// import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import { useHistory } from "react-router-dom";

const BuyCard = ({ d }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
          <Typography variant="h6">${d.price}</Typography>
        </div>
        <div className={classes.overlay2} name="edit">
          <Button style={{ color: "white" }} size="small">
            <Typography variant="body1">{d.quantity} kg</Typography>
            {/* <MoreHorizIcon fontSize="medium" /> */}
          </Button>
        </div>
        {/* )} */}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {d.owner}
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
            {d.location}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          //   disabled={!user?.result}
          onClick={() =>
            navigate("/payment", {
              state: {
                name: d.owner,
                amount: d.price,
                product: d.title,
                quantity: d.quantity,
              },
            })
          }
        >
          <LocalMallIcon /> &nbsp; Buy
        </Button>
        {/* {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && ( */}
        <Button
          size="small"
          color="secondary"
          // onClick={() =>}
          onClick={() => setIsOpen("9082035567")}
        >
          <ChatIcon fontSize="small" /> &nbsp; Call
        </Button>
        {isOpen && (
          <div>
                    
            <div>          This is the content of the pop-up.         </div>
                    
            
          </div>
        )}
        {/* )} */}
      </CardActions>
    </Card>
  );
};

export default BuyCard;

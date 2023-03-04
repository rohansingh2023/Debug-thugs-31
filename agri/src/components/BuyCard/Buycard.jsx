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
import CallIcon from "@material-ui/icons/Call";

import LocalMallIcon from "@material-ui/icons/LocalMall";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import toast from "react-hot-toast";

// import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import { useHistory } from "react-router-dom";

const BuyCard = ({ d }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const popUp = () => {
    toast(`Call ${d.contact_number}`);
  };

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
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ marginLeft: 15, marginTop: 10 }}
          // className="ml-4"
        >
          {d.description}
        </Typography>
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="h6">
            {d.village} {d.taluka}, {d.district} {d.state}
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
                address: d.address,
                number: d.contact_number,
              },
            })
          }
        >
          <LocalMallIcon /> &nbsp; Buy
        </Button>
        {/* {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && ( */}
        <Button size="small" color="secondary" onClick={() => popUp}>
          <CallIcon fontSize="small" /> &nbsp; Call
        </Button>

        {/* )} */}
      </CardActions>
    </Card>
  );
};

export default BuyCard;

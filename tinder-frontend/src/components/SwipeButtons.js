import { IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import './SwipeButtons.css';

const SwipeButtons = () => {
  return (
    <div className="swipe-buttons">
      <IconButton className="swipe-buttons-repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-lighting">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
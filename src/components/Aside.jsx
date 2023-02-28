import React from "react";
import LinkIcon from "./LinkIcon";

import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import Divider from '@mui/material/Divider';

const Aside = () => {
  return (
    <aside className="aside">
      <LinkIcon icon={<HomeIcon />} title="Home" />
      <LinkIcon icon={<OndemandVideoIcon />} title="Shorts" />
      <LinkIcon icon={<SubscriptionsOutlinedIcon />} title="Subscriptions" />
      <Divider />
      <LinkIcon icon={<VideoLibraryOutlinedIcon />} title="Library" />
      <LinkIcon icon={<HistoryIcon />} title="History" />
      <LinkIcon icon={<SlideshowIcon />} title="Your videos" />
      <LinkIcon icon={<AccessTimeIcon />} title="Watch later" />
      <LinkIcon icon={<ThumbUpAltOutlinedIcon />} title="Liked videos" />
      <LinkIcon icon={<KeyboardArrowDownOutlinedIcon />} title="Show more" />
      <Divider />
    </aside>
  );
}

export default Aside;

import React from "react";
import styles from "./../css/head.module.css";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import Av from "./../img/steven-hand.jpg"
import Youtube from "./../img/youtube.jpg";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        <div className={styles.hamburger}>
          <MenuIcon sx={{ fontSize: 35 }} />
          <img className={styles.youtubeLogo} src={Youtube} alt="Youtube" />
        </div>

        <div className={styles.searchContainer}>
          <input className={styles.search} type="search" placeholder="Search" />
          <button className={styles.searchButton}>
            <SearchIcon sx={{ fontSize: 25 }} />
          </button>
        </div>

        <Stack direction="row" alignItems="center" spacing={3}>
          <VideoCallOutlinedIcon sx={{ fontSize: 30 }} />
          <NotificationsOutlinedIcon  sx={{ fontSize: 30 }} />
          <Avatar src={Av} alt="SpaceLess" sx={{ width: 35, height: 35 }}>Eli</Avatar>
        </Stack>
      </nav>
    </header>
  );
}

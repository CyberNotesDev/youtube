import React from "react";
import styles from "./../css/linkIcon.module.css";

const LinkIcon = ({icon, title}) => {
    return (
        <div className={styles.asideLink}>
            <div>
             {icon}
            </div>
            <div>
             {title}
            </div>
        </div>
    );
}

export default LinkIcon;
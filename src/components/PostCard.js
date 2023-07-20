import React from "react";
import styles from "./components.module.scss";

const PostCard = ({ title }) => {
  return (
    <div className={styles.postCard}>
      <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h5>
    </div>
  );
};

export default PostCard;

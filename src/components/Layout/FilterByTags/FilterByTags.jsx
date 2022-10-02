import React from "react";
import styles from './FilterByTags.module.css'
import TagsFilter from "./TagsFilter/TagsFilter";
import TitleFilter from "./TitleFilter/TitleFilter";

export default function FilterByTags() {
  return (
    <div className={styles['filter-wrapper']}>
      <TitleFilter />
      <TagsFilter/>
    </div>
  );
}

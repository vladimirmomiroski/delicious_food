import React, { useContext, useState } from 'react'
import styles from './TagsFilter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../../../context-food/context-food'
import TagItem from './TagItem/TagItem'

export default function TagsFilter() {

    const { getValueTagsHandler, tags, onTagsSearchHandler } = useContext(Context)

    const [value, setValue] = useState('')

  return (
    <div>
        <div className={styles['filter-wrapper-input']}>
        <input value={value} className={styles['filter-input']} type="text" onChange={(e) => {
            setValue(e.target.value)
            getValueTagsHandler(e.target.value)
            }} />
        <FontAwesomeIcon className={styles['icon-filter']} onClick={(e) => {
         onTagsSearchHandler(e)
         setValue("")
        }
            
            } icon={faSearch} />
        </div>
        <div className={styles['tags-wrapper']}>
      {tags.map((tag, idx) => (
        <TagItem key={idx} tag={tag} />
      ))}
        </div>
    </div>
  )
}

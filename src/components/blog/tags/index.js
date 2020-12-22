import React from 'react'
import { FaTags } from "react-icons/fa";
import Anchor from '../../ui/anchor'
import { createList, slugify } from '../../../utils/utilFunctions'
import { TagWrapper } from './tags.style'

const Categories = ({ tags, ...restProps }) => {
    let tagList = createList({
        list: tags
    });
    return (
        <TagWrapper {...restProps}>
            <FaTags className="icon" />
            {tagList.map(tag => (
                <Anchor path={`/tag/${slugify(tag.text)}`} key={slugify(tag.text)}>
                    {tag.text}{tag.sep}
                </Anchor>
            ))}
        </TagWrapper>
    )
}

export default Categories;
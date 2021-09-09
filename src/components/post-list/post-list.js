import React from 'react'
import PostListItem from '../post-list-item';
import './post-list.css';
import { ListGroup } from 'reactstrap';
const PostList = ({posts, onDelete, onTogleImportant, onTogleLiked}) =>{
    // eslint-disable-next-line array-callback-return
    const elements = posts.map((item)=>{
        if(typeof item ==="object" && isEmpty(item)){
            const {id, ...itemProps} = item;
            return(
                <li key={id} className="list-group-item">
                    <PostListItem {...itemProps} 
                    onDelete={()=> onDelete(id)}
                    onTogleImportant={()=> onTogleImportant(id)}
                    onTogleLiked={()=> onTogleLiked(id)}/>
                </li>
            )
        }

    })

    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return(
        <ListGroup className="app-list ">
            {elements}

        </ListGroup>
    )
}
export default PostList;
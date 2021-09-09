import React,{Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component{


    render(){
        const{label, onDelete, onTogleImportant, onTogleLiked, important,like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important){
            classNames += ' important'
        }
        if (like){
            classNames += ' like'
        }
        return(
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={onTogleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn-star btn-sm" onClick={onTogleImportant}>
                        &#10084;
                    </button>

                    <button type="submit" className="btn-trash btn-sm" onClick={onDelete}>
                        &times;
                    </button>

                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )

    }
}





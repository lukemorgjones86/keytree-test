import React from 'react';
import ReactDOM from 'react-dom';

import {GithubUser} from './types';

type Props = {
    user: GithubUser;
    handleClick: any;
}

const User: React.SFC<Props> = (props: Props) => (
    <div className="user_detail_container">
        <h2>User Search Result: </h2>
        <div className="user_search_result">
            user: <span className="user_detail_item">{props.user.login}</span>
            name: { props.user.name ? <span className="user_detail_item">{props.user.name}</span> : <span className="user_detail_item">n/a</span> }
            number of Repos:<span className="user_detail_item"> {props.user.public_repos}</span>
        </div>
    </div>
)

export default User
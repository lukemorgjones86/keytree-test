import React from 'react';
import ReactDOM from 'react-dom';

import Search from '../components/search';
import List from '../components/list';
import User from '../components/user';

import styles from './SearchRepos.module.scss';

import { getRepos, getUserData } from '../services/api';

import { GithubUser } from '../components/types';

type Props = {
}

type State = {
    value: string;
    user?: GithubUser;
    org?: any;
    repos?: any;
    searchType?: string;
}

const initialState = {
    value: '',
    user: undefined, 
    org: undefined,
    repos: undefined,
    searchType: 'user'
}

class SearchReposComponent extends React.Component<Props, State> {
    constructor(props: Props) {
	    super(props)
        this.state = initialState;

        this.getUser = this.getUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.getReposFromUser = this.getReposFromUser.bind(this);
        this.toggleSearchType = this.toggleSearchType.bind(this);
    }

    getRepos(string:string) {
        getRepos(string)
            .then(data => {
                this.updateRepos(data)
            })
    }

    getReposFromUser() {
        if (this.state.user) {
            getRepos(this.state.user.login)
                .then(data => {
                    this.updateRepos(data)
                })
            }
    }

    updateRepos(repos: any[]) {
        this.setState({
            repos: repos
        })
    }

    getUser(string:string) {
        this.setState(initialState);
            
        getUserData(string)
            .then(data => {
                this.updateUser(data)
                this.getRepos(data.user.login)
            })
    }

    updateUser(user: any) {
        this.setState({
            user: user.user,
            org: user.org
        })
    }

    toggleSearchType(type:string) {
        this.setState({
            searchType: type
        })
    }
      
    render () {
        return <div className={styles.search_container}>
            <div className={styles.columns_2}>
            <div className="fixed_content">
                <h1>Search by user</h1>
                <Search handleClick={this.getUser } /> 
            </div>
            </div>
            <div className={styles.columns_2}>
                <div className={styles.user_details}>
                 { this.state.user ? <User user={this.state.user} handleClick={this.getReposFromUser} /> : null}
                </div>
                { this.state.repos ? <List items={this.state.repos} title="User repos" />: null}
            </div> 
        </div>
    }
}

export default SearchReposComponent
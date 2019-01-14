import React from 'react';
import ReactDom from 'react-dom';

type Props = {
    handleClick: any;
}
type State = {
    value: string;
    validValue: boolean;
}
interface EventTarget {
    value: string
}

class SearchComponent extends React.Component<Props, State> {

    constructor(props: Props) {
	    super(props)
	    this.state = {
            value: '',
            validValue: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value});
        
        if (this.state.value !== '') {
            this.setState({validValue: true})
        }
    }

    handleClick(event: React.MouseEvent<HTMLInputElement>){
        event.preventDefault();
        
        if (this.state.value !== '' ) {
            this.props.handleClick(this.state.value)
        }
        else {
            this.setState({validValue: false})
        }
    }

    render () {
        return <form className="search-form">
            <input className="search_form primary_text_input" type="text" value={this.state.value} onChange={this.handleChange}></input>
            <span className="search_form error">{ this.state.validValue ? '':'please enter some text' }</span>
            <input className="search_form primary_button" type="submit" onClick={this.handleClick}></input>
        </form>
    }
}

export default SearchComponent
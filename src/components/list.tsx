import React, { Children } from 'react';
import ReactDOM from 'react-dom';

type Props = {
    items: any[];
    title: string;
}

const List: React.SFC<Props> = (props: Props) => (
        <div>
            <h3>{props.title}:</h3>
            <ul>
                { props.items.map((item:any, i:number) => <li key={i} className="item">{item.name}</li> )}
            </ul>
        </div>
)

export default List
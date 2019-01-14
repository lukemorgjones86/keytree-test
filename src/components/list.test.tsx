import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

import {shallow} from 'enzyme';

it('renders list from array with title', () => {
  const div = document.createElement('div');
  const list = shallow(<List items={['1','2','3','4','5']} title={'test list'}/>)

  expect(list.find('li')).toHaveLength(5);
  expect(list.find('h3').text()).toEqual('test list:');
});

/* @flow */

import type {Store, Item} from 'src/store-types';

import React from 'react';
import map from 'lodash/map';
import {Link} from 'react-router';
import withStore from 'src/flux/with-store.jsx';


type Props = {
  store: Store,
};

const ListPage = ({store}: Props) => (
  <ol>
    { map(store.items, item => (
      <ItemRow key={item.id} item={item} />
    )) }
  </ol>
);

export default withStore()(ListPage);


const ItemRow = ({item}: {item: Item}) => (
  <li>
    <Link to={`/${item.id}`}>
      {item.name}
    </Link>
  </li>
);


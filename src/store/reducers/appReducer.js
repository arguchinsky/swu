import { combineReducers } from 'redux';

import { planets } from './planets';
import { people } from './people';
import { activeItem } from './activeItem';
import { dataLoaded } from './dataLoaded';

export const appReducer = combineReducers({ planets, people, dataLoaded, activeItem });

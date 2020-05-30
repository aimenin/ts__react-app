import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// описывает структуру нашего общего стейта
export interface StoreState {
    todos: Todo[] // значит, что рейдьюсер будет возвращать массив из Todo
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});
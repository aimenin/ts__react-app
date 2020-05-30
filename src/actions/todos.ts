import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

// интерфейс, который объясняет typeScript, что мы берем с сервера
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// интерфейс, предназначенный для action
export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

// интерфейс, предназначенный для action
export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

// action creator
export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url); // сюда мы передаем интерфейс и объясняем typeScript, что будет получено с сервера

        dispatch<FetchTodosAction>({ // мы передаем сюда интерфейс, чтобы всегда быть уверены, что передали правильные параметры в dispatch
            type: ActionTypes.fetchTodos,
            payload: response.data
        });
    };
};

// action creator
export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }
}
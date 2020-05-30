import { FetchTodosAction, DeleteTodoAction } from './todos';

// в тайпскрипт типы экшинов задаются черех enum!
export enum ActionTypes {
    fetchTodos,
    deleteTodo
}

// создаем общий type-union, чтобы не раздувать в размере файл с рудьюсерами
// здесь будут лежать все интерфейсы, предназначенные для редьюсеров
export type Action = FetchTodosAction | DeleteTodoAction


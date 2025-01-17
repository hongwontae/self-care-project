import {Todo} from './TodoInterface';

export interface HttpResponse{
    statis : boolean;
    message : string;
    data : Promise<Todo[]>
}

export interface HttpNoneDataResponse {
    status : boolean;
    message : string;
}
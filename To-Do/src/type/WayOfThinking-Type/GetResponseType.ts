export interface getDataType {
    wotId : number;
    wotLine : string;
    createdAt : string;
    updatedAt : string
}

export interface GetAllType {
    status : boolean
    message : string
    data : getDataType[] | undefined
}
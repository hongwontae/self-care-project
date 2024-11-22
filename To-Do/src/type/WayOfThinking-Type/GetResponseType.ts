export interface getDataType {
    wotId : number;
    wotLine : string;
    highlight : boolean;
    createdAt : string;
    updatedAt : string
}

export interface GetAllType {
    status : boolean
    message : string
    data : getDataType[] | undefined
}
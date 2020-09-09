import { Request as DefaultRequest } from 'express';
export interface ParamsDictionary {
    [key: string]: string;
}

export interface Query {
    [key: string]: undefined | string | string[] | Query | Query[];
}

export interface RequestBody<B> extends DefaultRequest {
    body: B;
}

export interface RequestParams<P extends ParamsDictionary> extends DefaultRequest {
    params: P;
}

export interface RequestQuery<Q extends ParamsDictionary> extends DefaultRequest {
    query: Q;
}
export interface RequestForm<B = never, Q extends Query = never, P extends ParamsDictionary = never>
    extends DefaultRequest {
    body: B;
    params: P;
    query: Q;
}
interface FormCountBody {
    names: [][];
}
export interface RequestFormShow<B = FormCountBody, Q extends Query = never, P extends ParamsDictionary = >
    extends DefaultRequest {
    body: B;
    params: P;
    query: Q;
}


export interface RequestParamsShow extends DefaultRequest {
    query: {
        names: [];
    };
    body: {
        names: [];
    };
}
export interface Log{
  Id: number;
  HookupBeId: number;
  Timestamp: Date;
  IsSuccessful: boolean;
  ErrorMessage: string;
}

export interface ResponseDto<t>{
  responseData?: t;
  messageToClient?: t;
}

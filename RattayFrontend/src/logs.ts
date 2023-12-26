export interface Log{
  logString: string;
}

export interface ResponseDto<t>{
  responseData?: t;
  messageToClient?: t;
}

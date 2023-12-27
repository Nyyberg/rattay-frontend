export interface Hookup {
  id: number;
  url: string;
  methodType: string;
  isEveryDay: boolean;
  isEveryWeek: boolean;
  isEveryMonth: boolean;
  timeOfDay: Date;
}

export interface BodyDTO{
  hookupBodyId: number;
  bodyType: string;
  parameterName: string;
  custom: string;
  sqlQuery: string;
  hookupAsParameter: number;
}

export interface HeaderDTO{
  hookupHeaderID: number;
  headerKey: string;
  headerValue: string;
  headerType: string;
  hookupAsParameter: number;
}


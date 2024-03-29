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
  hookupBeId: number;
  bodyType: string;
  parameterName: string;
  custom: string;
  sqlQuery: string;
  hookupAsParameter: number;
}

export interface HeaderDTO{
  hookupBeId: number;
  headerKey: string;
  headerValue: string;
  ValueType: string;
  SqlQuery: string;
  hookupAsParameter: number;
}


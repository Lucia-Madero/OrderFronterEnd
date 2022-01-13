export interface AlertMessage {
  title: string,
  description: string,
  type: AlertMessageType
}

export enum AlertMessageType {
  SUCCESS = 'SUCCESS',
  DANGER = 'DANGER'
}

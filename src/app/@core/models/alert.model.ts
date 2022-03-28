export interface IAlert {
  header: string;
  text: string;
  icon: string;
  iconColor: string;
}

export enum AlertEnum {
  INFO = 'info',
  WARNING = 'warning'
}

export const AlertConstant: {[key: string]: IAlert} = {
  [AlertEnum.INFO]: {
    header: 'Info',
    text: 'Some information',
    icon: 'circle-info',
    iconColor: '#1E92F4'
  },

  [AlertEnum.WARNING]: {
    header: 'Warning',
    text: 'Are you sure you want to delete this item?',
    icon: 'triangle-exclamation',
    iconColor: '#ff0000'
  }
}

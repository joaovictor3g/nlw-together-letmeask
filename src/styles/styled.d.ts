import 'styled-components';

declare  module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      text: string;

      asideBackground: string;
      asideColor: string;
      strongColor: string;
      formInputBg: string;
      formInputBorder: string;

      createRoomBackground: string;
      createRoomColor: string;

      separatorColor: string;
      separatorBefore: string;
      separatorAfter: string;

      pColor: string,
      aColor: string,

      questionBoxBg: string;
    },  
  }
}
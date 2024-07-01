declare module 'react-native-table-component' {
    import { Component } from 'react';
    import { ViewStyle, TextStyle, StyleProp } from 'react-native';
  
    export interface TableProps {
      borderStyle?: StyleProp<ViewStyle>;
      children?: ReactNode;
    }
  
    export interface TableWrapperProps {
      style?: StyleProp<ViewStyle>;
      children?: ReactNode;
    }
  
    export interface RowProps {
      data: any[];
      style?: StyleProp<ViewStyle>;
      widthArr?: number[];
      height?: number;
      flexArr?: number[];
      textStyle?: StyleProp<TextStyle>;
    }
  
    export interface RowsProps {
      data: any[][];
      style?: StyleProp<ViewStyle>;
      widthArr?: number[];
      heightArr?: number[];
      flexArr?: number[];
      textStyle?: StyleProp<TextStyle>;
    }
  
    export class Table extends Component<TableProps> {}
    export class TableWrapper extends Component<TableWrapperProps> {}
    export class Row extends Component<RowProps> {}
    export class Rows extends Component<RowsProps> {}
  }
  
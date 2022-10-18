/* eslint-disable no-underscore-dangle */
import React, { Dispatch, SetStateAction } from 'react';

import {
  DatePicker, DatePickerProps, Select,
} from 'antd';
import {
  Container, TitleRegisterProduct, SinveInput,
} from './style';
import { Provider } from '../../interfaces/Provider';

const { Option } = Select;

interface InputSinveProps {
  width: string;
  title?: string;
  isSelectDate?: boolean;
  isShowHistory?: boolean;
  isSelectable?: boolean
  withMargin?: boolean;
  placeholder?: string;
  setData?: Dispatch<SetStateAction<string>>;
  providers?: Provider[];
  onSelect?: Function;
  data?: string;
  marginLeft?: string;
}

export const InputSinve: React.FC<InputSinveProps> = ({
  width, title, isSelectDate, isShowHistory, isSelectable,
  withMargin, placeholder, setData, providers, onSelect, data,
  marginLeft,
}) => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    if (onSelect) onSelect(dateString);
  };

  return (
    <Container width={width} withMargin={withMargin} marginLeft={marginLeft}>
      {title
        ? <TitleRegisterProduct isShowHistory={isShowHistory}>{title}</TitleRegisterProduct>
        : <></>}

      {
        isSelectable && (
          <Select
            style={{
              width: '100%',
            }}
            onSelect={(event: string) => {
              if (onSelect) onSelect(event);
            }}
          >
            {
              providers?.map((provider) => (
                <Option
                  value={provider.CNPJ}
                  key={provider._id}
                >
                  {provider.CNPJ}
                </Option>
              ))
            }
          </Select>
        )
      }

      {
        isSelectDate && (
          <DatePicker
            style={{
              width: '100%',
            }}
            onChange={onChange}
          />
        )
      }
      {
        !isSelectDate && !isSelectable && (
          <SinveInput
            placeholder={placeholder}
            style={{
              width: '100%',
            }}
            isShowHistory={isShowHistory}
            onChange={(event) => {
              if (setData) { setData(event.target.value); }
            }}
            value={data}
          />
        )
      }
    </Container>

  );
};

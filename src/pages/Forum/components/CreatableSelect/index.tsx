import React, { useEffect, useState } from 'react';
import { StylesConfig } from 'react-select';

import CreatableSelect from 'react-select/creatable';
import { useTheme } from 'styled-components';
import { useContextSelector } from 'use-context-selector';
import { TeachersContext } from '../../../../contexts/TeachersContext';

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

interface CreatableSelectProps {
  isInForm?: boolean;
}


const CreatableSelectComponent = ({ isInForm = false }: CreatableSelectProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<Option | null>();
  const theme = useTheme();

  const teachers = useContextSelector(TeachersContext, (context) => context.teachers);
  const fetchTeachers = useContextSelector(TeachersContext, (context) => context.fetchTeachers);
  const createTeacher = useContextSelector(TeachersContext, (context) => context.createTeacher);
  
  const defaultOptions = [
    createOption('Perguntas sem tag'),
  ];
  
  const teachersOptions = teachers.map((teacher) => createOption(teacher.toString()));
  
  const [options, setOptions] = useState([...defaultOptions, ...teachersOptions]);

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      createTeacher({ name: inputValue }); // TODO: Corrigir aqui
      setOptions((prev) => [...prev, newOption]); // TODO: Corrigir aqui
      setValue(newOption);
    }, 1000);
  };

  // useEffect(() => {
  //   fetchTeachers('')
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [fetchTeachers]);

  const colourStyles: StylesConfig<Option, false> = {
    control: styles => ({ 
      ...styles, 
      backgroundColor: theme['surface-variant'],
      width: isInForm? '100%' : 'fit-content',
      height: '100%',
      border: 'none',
      color: theme['on-surface-variant'],
      borderRadius: '8px',
      boxShadow: 'none',

      span : {
        backgroundColor: theme['on-surface-variant'],
      },

      svg: {
        fill: theme['on-surface-variant'],
      },

    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        whiteSpace: 'nowrap',
        fontWeight: 'bold',
        backgroundColor: isDisabled
          ? undefined
          : isSelected
            ? theme['surface'] + '50'
            : isFocused
              ? theme['surface'] + '30'
              : undefined,
        color: isDisabled
          ? theme['on-surface-variant'] + '20'
          : isSelected
            ? theme['primary']
            : theme['on-surface-variant'],
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    input: styles => ({ 
      ...styles, 
      color: theme['on-surface-variant'],
      fontWeight: 'bold',
    }),
    placeholder: styles => ({ 
      ...styles, 
      color: theme['on-surface-variant'],
      opacity: 0.5,
      fontWeight: 'bold',
    }),
    singleValue: (styles) => ({ 
      ...styles, 
      color: theme['on-surface-variant'],
      fontWeight: 'bold',
    }),
    menu: (styles) => ({
      ...styles,
      width: 'fit-content',
      backgroundColor: theme['surface-variant'],
    }),
  }

  return (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => setValue(newValue)}
      onCreateOption={handleCreate}
      options={options}
      value={value}
      styles={colourStyles}
      placeholder={isInForm ? 'Adicione tag por professor(a) (opcional)' : 'Filtre por professor(a)'}
      formatCreateLabel={(inputValue) => `Criar professor(a) "${inputValue}"`}
      // TODO: Pegar a info de quando é selecionado (pra filtrar no fórum e devolver nome no form)
    />
  );
};

export default CreatableSelectComponent;

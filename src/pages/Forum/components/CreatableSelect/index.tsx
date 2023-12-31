import { useState, useEffect } from 'react';
import { StylesConfig, SingleValue } from 'react-select';

import CreatableSelect from 'react-select/creatable';
import { useTheme } from 'styled-components';
import { useContextSelector } from 'use-context-selector';
import { TeachersContext } from '../../../../contexts/TeachersContext';
import { PostsContext } from '../../../../contexts/PostsContext';
import { useParams } from 'react-router-dom';

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string, customValue?: string) => ({
  label,
  value: customValue === undefined ? label : customValue,
});

interface CreatableSelectProps {
  isInForm?: boolean;
  selectProfessor?: (name: 'professor', value?: string) => void;
}

const CreatableSelectComponent = ({ isInForm = false, selectProfessor }: CreatableSelectProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const { subjectId } = useParams();

  const fetchTeachers = useContextSelector(TeachersContext, (context) => context.fetchTeachers);
  const createTeacher = useContextSelector(TeachersContext, (context) => context.createTeacher);
  const fetchPosts = useContextSelector(PostsContext, (context) => context.fetchPosts);
  
  const defaultOptions = [
    createOption('Todos(as) professores(as)', ''),
  ];
  
  const [options, setOptions] = useState(defaultOptions);

  const handleCreate = (inputValue: string) => {
    const newOption = createOption(inputValue);
    createTeacher({ name: inputValue });
    setOptions((prev) => [...prev, newOption]);
    selectProfessor && selectProfessor('professor', inputValue);
  };

  const handleSelect = (option: SingleValue<Option>) => {
    if (!option) return;

    selectProfessor && selectProfessor('professor', option.value);

    if (!isInForm) fetchPosts(subjectId || '', { professor: option.value });
  }

  const handleClear = () => {
    if (!isInForm) {
      fetchPosts(subjectId || '');
    }
  };

  useEffect(() => {
    fetchTeachers('')
      .then((teachers) => {
        const teachersOptions = teachers.map((teacher) => createOption(teacher.name.toString()));
        setOptions([...defaultOptions, ...teachersOptions]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchTeachers]);

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
      // onChange={handleSelect}
      onChange={(selectedOption, actionMeta) => {
        if (actionMeta.action === 'clear') {
          handleClear();
        } else {
          handleSelect(selectedOption);
        }
      }}
      onCreateOption={handleCreate}
      options={options}
      styles={colourStyles}
      placeholder={isInForm ? 'Professor(a) (opcional)' : 'Filtre por professor(a)'}
      formatCreateLabel={(inputValue) => `Criar professor(a) "${inputValue}"`}
    />
  );
};

export default CreatableSelectComponent;

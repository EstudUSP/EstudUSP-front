import { ReactNode, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

export interface Teacher {
  id: number;
  name: string;
}

export interface CreateTeacherInput {
  name: string;
}

interface TeachersContextType {
  teachers: Teacher[];
  fetchTeachers: (subjectId: string, query?: string) => Promise<Teacher[]>;
  createTeacher: (data: CreateTeacherInput) => Promise<void>;
}

export const TeachersContext = createContext({} as TeachersContextType);

interface TeachersProviderProps {
  children: ReactNode;
}

export function TeachersProvider({ children }: TeachersProviderProps) {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  
  const fetchTeachers = useCallback(async () => {
    const response = await api.get(`/professors`);
    setTeachers(response.data);
    return response.data;
  }, []);

  const createTeacher = async (data: CreateTeacherInput) => {
    const { name } = data;

    const formData = new FormData();

    formData.append('name', String(!name));

    const response = await api.post(`/teacher`, formData);

    setTeachers(state => [response.data, ...state])
  };


  return (
    <TeachersContext.Provider value={{
      teachers,
      fetchTeachers,
      createTeacher,
    }}>
      {children}
    </TeachersContext.Provider>
  )
}
export interface Student {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  level: number;

  totalScore?: number;
  courses?: [
    {
      course: string;
      coefficient: number;
      mark: number;
    }
  ]
}

export class CourseModel {
  constructor(
    public id: string,
    public title: string,
    public price: number,
    public rating: number,
    public likes: number,
    public imageUrl: string,
  ) {}
}

export interface CourseProps {
  coursedetails: CourseModel;
}

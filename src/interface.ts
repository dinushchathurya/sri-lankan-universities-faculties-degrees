export interface IUniversity {
    id: string;
    name: string;
    phonecode: string;
    sortname: string;
}

export interface IFaculty {
    id: string;
    name: string;
    university_id: string;
}
export interface IDegree {
    id: string;
    name: string;
    faculty_id: string;
}

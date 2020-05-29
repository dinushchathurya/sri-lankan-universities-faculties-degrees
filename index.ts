import universityList from './lib/university.json';
import facultyList from './lib/faculty.json';
import degreeList from './lib/degree.json';
import { IUniversity, IFaculty, IDegree } from './src/interface';
export { IUniversity, IFaculty, IDegree } from './src/interface';

export default {
    getUniversityById: function (id: string): IUniversity {
        return _findEntryById(universityList, id);
	},
    getFacultyById: function (id: string): IFaculty {
        return _findEntryById(facultyList, id);
	},
    getDegreeById: function (id: string): IDegree {
        return _findEntryById(degreeList, id);
	},
    getFacultiesOfUniversities: function (universityId: string): IFaculty[] {
        var faculties = facultyList.filter(function (value, index) {
            return value.university_id === universityId
		})
        return faculties.sort(compare)
	},
	getDegreesOfFaculty: function (facultyId: string): IDegree[] {
		var degrees = degreeList.filter(function (value, index) {
            return value.faculty_id === facultyId
		})
		return degrees.sort(compare)
	},
	getAllUniversities: function (): IUniversity[] {
		return universityList;
	},
	getUniversityByCode: function (code: string): IUniversity {
		return _findEntryByCode(universityList, code);
    }
}
let _findEntryById = (source: any, id: string) => {
    if (id && source != null) {
        let idx = source.findIndex((c: any) => c.id === id);
        return (idx !== -1) ? source[idx] : "";
    }
    else return "";
}

let _findEntryByCode = (source: any, code: string) => {
    if (code && source != null) {
        let codex = source.findIndex((c: any) => c.sortname === code);
        return (codex !== -1) ? source[codex] : "";
    }
    else return "";
}

function compare(a: any, b: any) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}
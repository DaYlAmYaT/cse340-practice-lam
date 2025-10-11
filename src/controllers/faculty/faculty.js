import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

const facultyListPage = (req, res) => {
    const sort = req.query.sort;
    const sortedFaculties = getSortedFaculty(sort);

    res.render('./faculty/list', {
        title: 'Faculties',
        faculties: sortedFaculties
    });
}

const facultyDetailPage = (req, res, next) => {
    const facultyID = req.params.facultyId;
    const faculty = getFacultyById(facultyID);

    if (!faculty) {
        const err = new Error(`Faculty ID ${facultyID} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('./faculty/detail', {
        title: `${faculty.name}`,
        faculty: faculty
    });
}

export { facultyListPage, facultyDetailPage };
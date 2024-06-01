function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const ids = students.map(students => students.id);

  return ids;
}

export default getListStudentIds;

export const paginate = (
  tenders: User[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(tenders).slice(startIndex).take(pageSize).value();
};

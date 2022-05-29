export const formatDate = (createAt?: number) => {
  if (createAt) {
    const date = new Date(createAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return '';
};

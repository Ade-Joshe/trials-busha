export const isValidUserRole = (roles: string[], currentUserRole = '') => {
  return roles.includes(currentUserRole);
}
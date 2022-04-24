export const userQuery = (userId) => {
    // Sanity Query to get user data
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query
}
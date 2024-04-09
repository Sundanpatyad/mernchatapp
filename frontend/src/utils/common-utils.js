export const formatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM'; 

    const twelveHourFormat = hours % 12 || 12; 

    return `${twelveHourFormat < 10 ? '0' + twelveHourFormat : twelveHourFormat}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
};

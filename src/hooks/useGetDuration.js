export const useGetDuration = () => {
    const getDuration = (time) => {
        let duration = Date.now() - time;
        let seconds = duration / 1000;
        let minutes = duration / (60 * 1000);
        let hours = duration / (60 * 60 * 1000);
        let days = duration / (24 * 60 * 60 * 1000);
        let weeks = duration / (7 * 24 * 60 * 60 * 1000);
        let months = duration / (30 * 24 * 60 * 60 * 1000);
        let years = duration / (12 * 30 * 24 * 60 * 60 * 1000);
        if (seconds < 60) {
          return seconds.toFixed(0) < 1
            ? "just now"
            : `${seconds.toFixed(0)} seconds ago`;
        } else if (minutes < 60) {
          return `${minutes.toFixed(0)} minutes ago`;
        } else if (hours < 24) {
          return `${hours.toFixed(0)} hours ago`;
        } else if (days < 7) {
          return `${days.toFixed(0)} days ago`;
        } else if (days < 30) {
          return `${weeks.toFixed(0)} weeks ago`;
        } else if (months < 12) {
          return `${months.toFixed(0)} months ago`;
        } else {
          return `${years.toFixed(0)} years ago`;
        }
    }

    return getDuration; 
}

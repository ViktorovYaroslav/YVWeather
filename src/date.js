const date = new Date();

export const day      = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
export const year     = date.getFullYear();
export const month    = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
export const monthDay = date.getDate();
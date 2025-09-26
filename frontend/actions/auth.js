// import { API } from "../config"; // adjust path according to file location
// import cookie from 'js-cookie';
// export const signup = async (user) => {
//   console.log("Signup API URL:", `${API}/signup`); // for debugging
//   return fetch(`${API}/signup`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(user),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then((err) => Promise.reject(err));
//       }
//       return response.json();
//     })
//     .catch((err) => {
//       console.error("Signup API error:", err);
//       throw err;
//     });
// };


// export const signin = async (user) => {
//   console.log("Signin API URL:", `${API}/signin`); // for debugging
//   return fetch(`${API}/signin`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(user),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then((err) => Promise.reject(err));
//       }
//       return response.json();
//     })
//     .catch((err) => {
//       console.error("Signin API error:", err);
//       throw err;
//     });
// };

// // set cookie
// export const setCookie = (key, value) => {
//   if(process.browser) {
//     cookie.setCookie(key, value, {
//       expires: 1 // 1 day
//     });
//   }
// }

// // get cookie
// export const getCookie = (key) => {
//     if(process.browser){
//       cookie.getCookie(key);
//     }
//   }

  

// // set local storage
// export const setLocalStorage = (key, value) => {
//   if(process.browser) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }   
// };

// // get local storage
// export const getLocalStorage = (key) => {
//   if(process.browser) {
//     localStorage.removeItem(key);
//   }
//     };

// // authenticate user by passing data to local storage and cookie
// export const authenticate = (data, next) => {
//   setCookie('token', data.token); // set token in cookie
//   setLocalStorage('user', data.user); // set user in local storage
//   next();
// }

// export const isAuth = () => {
//   if(process.browser) {
//     const cookieChecked = getCookie('token'); // get token from cookie      
//     if(cookieChecked) {
//       if(localStorage.getItem('user')) { // check if user is in local storage
//         return JSON.parse(localStorage.getItem('user')); // return user
//       } else {
//         return false;
//       }     
//     } else {
//       return false;
//     }   
//   }
  
// }

import { API } from "../config"; // adjust path if needed
import Cookies from "js-cookie";

/* ------------------- API CALLS ------------------- */

// signup API
export const signup = async (user) => {
  console.log("Signup API URL:", `${API}/signup`);
  try {
    const response = await fetch(`${API}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const err = await response.json();
      throw err;
    }
    return await response.json();
  } catch (err) {
    console.error("Signup API error:", err);
    throw err;
  }
};

// signin API
export const signin = async (user) => {
  console.log("Signin API URL:", `${API}/signin`);
  try {
    const response = await fetch(`${API}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const err = await response.json();
      throw err;
    }
    return await response.json();
  } catch (err) {
    console.error("Signin API error:", err);
    throw err;
  }
};

/* ------------------- COOKIE HELPERS ------------------- */

// set cookie
export const setCookie = (key, value, options = {}) => {
  if (typeof window !== "undefined") {
    Cookies.set(key, value, { expires: 1, ...options }); // default 1 day
  }
};

// get cookie
export const getCookie = (key) => {
  if (typeof window !== "undefined") {
    return Cookies.get(key);
  }
  return null;
};

// remove cookie
export const removeCookie = (key) => {
  if (typeof window !== "undefined") {
    Cookies.remove(key);
  }
};

/* ------------------- LOCAL STORAGE HELPERS ------------------- */

// set local storage
export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// get local storage
export const getLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

// remove local storage
export const removeLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

/* ------------------- AUTH HELPERS ------------------- */

// authenticate user by saving token + user
export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

// check if user is authenticated
export const isAuth = () => {
  if (typeof window !== "undefined") {
    const token = getCookie("token");
    if (token) {
      const user = getLocalStorage("user");
      return user ? user : false;
    }
  }
  return false;
};

// logout (optional helper)
export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
  return fetch(`${API}/signout`, { method: "GET" })
    .then((response) => {
      console.log("Signout successful");
    })
    .catch((err) => console.error("Signout error:", err));
};

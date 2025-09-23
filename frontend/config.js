// import getConfig from "next/config";

// const config = getConfig(); // ✅ assign to a variable first
// const { publicRuntimeConfig } = config;

// export const API = publicRuntimeConfig.API;
// export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const API = process.env.NEXT_PUBLIC_API;
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;



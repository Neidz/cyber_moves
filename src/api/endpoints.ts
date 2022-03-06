export const baseUrl = "https://cybermoves.herokuapp.com/api";

// auth
export const loginEndpoint = `${baseUrl}/auth/login`;
export const registerEndpoint = `${baseUrl}/auth/register`;

// private
export const newCommandEndpoint = `${baseUrl}/newCommand`;
export const userCommandsEndpoint = `${baseUrl}/userCommands`;
export const userCommandsByTypeEndpoint = `${baseUrl}/userCommands?robotType=`;

// public
export const commandByNameEndpoint = `${baseUrl}/public/commandByName?name=`;
export const allNamesByTypeEndpoint = `${baseUrl}/public/allNamesByType?robotType=`;

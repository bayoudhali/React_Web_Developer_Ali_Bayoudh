import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const Base_URL = import.meta.env.VITE_BASE_URL || "";
const Api_URL = import.meta.env.VITE_API || "";

const axionsInstance = axios.create({
  baseURL: Base_URL + Api_URL,
});

export const get = async <T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> => {
  try {
    const { data }: AxiosResponse<T> = await axionsInstance.get<T>(
      url,
      options
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data
          ? JSON.stringify(error.response.data)
          : error.message
      );
    }
    throw new Error("Unexpected error occurred.");
  }
};

// Post method
export const post = async <T, U>(
  url: string,
  payload: U,
  options?: AxiosRequestConfig
): Promise<T> => {
  try {
    const { data }: AxiosResponse<T> = await axionsInstance.post<T>(
      url,
      payload,
      options
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data
          ? JSON.stringify(error.response.data)
          : error.message
      );
    }
    throw new Error("Unexpected error occurred.");
  }
};

// Helper to check if the error is an AxiosError
const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError).isAxiosError !== undefined;
};

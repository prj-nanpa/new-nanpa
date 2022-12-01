import { axiosClient } from "hooks/axiosClient";
import { useCallback } from "react";

export const useTags = () => {
  const getAllTags = useCallback(async () => {
    const result = axiosClient.get("tags");
    return (await result).data;
  }, []);
  return { getAllTags };
};

//

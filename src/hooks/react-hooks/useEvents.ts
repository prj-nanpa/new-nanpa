import { axiosClient } from "hooks/axiosClient";
import { useCallback } from "react";
import { SearchEventListType } from "types/SearchEventList";

export const useEvents = () => {
  const getEvent = useCallback(async (query: string) => {
    const result = axiosClient.get(`events?eventid=${query}`);
    return result;
  }, []);
  const getEvents = useCallback(async () => {
    const result = axiosClient.get("events");
    return result;
  }, []);
  const getSearchEvent = useCallback(
    async (SearchEventList: SearchEventListType, page?: number) => {
      const QueryData = SearchQueryData(SearchEventList);
      let pagequery = "";
      if (page !== undefined) {
        pagequery = `&page=${page}`;
      }

      const result = axiosClient.get(
        `events_search?${QueryData + "&" + pagequery}`
      );
      return result;
    },
    []
  );
  const SearchQueryData = (data: SearchEventListType) => {
    let tags = "";
    if (data?.tagsid) {
      tags = `&tagid=${data.tagsid.join("+")}`;
    }

    let tagsQuery = "";
    if (data?.tagsid?.length !== 0) {
      tagsQuery = tags;
    }

    let budgetQuery = "";
    if (data?.budget) {
      budgetQuery = `&budget=${data?.budget}`;
    }

    let minguestQuery = "";
    if (data?.minguest) {
      minguestQuery = `&minguest=${data?.minguest}`;
    }

    let maxguestQuery = "";
    if (data?.maxguest) {
      maxguestQuery = `&maxguest=${data?.maxguest}`;
    }

    let fromdateQuery = "";
    if (data?.fromdate) {
      fromdateQuery = `&fromdate=${data?.fromdate}`;
    }

    let todateQuery = "";
    if (data?.todate) {
      todateQuery = `&todate=${data?.todate}`;
    }

    let numQuery = "";
    if (data?.num) {
      numQuery = `&num=${data?.num}`;
    }
    const SearchQuery =
      tagsQuery +
      budgetQuery +
      minguestQuery +
      maxguestQuery +
      fromdateQuery +
      todateQuery +
      numQuery;
    return SearchQuery;
  };
  const postEvent = useCallback(async () => {
    const result = axiosClient.post("events", {});
    return result;
  }, []);
  const putEvent = useCallback(async () => {
    const result = axiosClient.put("events", {});
    return result;
  }, []);
  const deleteEvent = useCallback(async () => {
    const result = axiosClient.delete("events", {});
    return result;
  }, []);

  return {
    getEvent,
    getEvents,
    getSearchEvent,
    postEvent,
    putEvent,
    deleteEvent,
  };
};

//

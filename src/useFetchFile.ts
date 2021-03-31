import useAxios from "./useAxios";

const useFetchProductsFile = (url: string) => {
  const [{ error, response, loading }, reFetch] = useAxios(
    {
      url,
      method: "GET",
      headers: {
        accept: "text/csv"
      },
      responseType: "blob",
      data: {}
    },
    {
      manual: true
    }
  );

  return {
    fileError: error,
    fileResponse: response,
    fileLoading: loading,
    fileRefetch: reFetch
  };
};

export default useFetchProductsFile;

// export default function useFetch(url: string) {
//   const fetchData = async (url: string) => {
//     try {
//       const res = await fetch(url);
//       const data = res.json();
//       return data;
//     } catch (error) {
//       if (error instanceof Error) {
//         // alert(error.message);
//         console.error(error.message);
//       }
//     }
//   };

//   fetchData(url);
// }

// export async function useFetchData(url: string) {
//   const res = await fetch(url);
//   const results = res.json();
//   console.log(results);
//   return results;
// }

export const useFetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      // alert(error.message);
      console.error(error.message);
    }
  }
};

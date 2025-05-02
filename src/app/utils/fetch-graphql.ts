export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number,
  maxRetries = 3
): Promise<T> => {
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      
      const response = await fetch(process.env.NEXT_HYGRAPH_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
          Accept: "application/json",
          'Connection': 'keep-alive'
        },
        next: {
          revalidate,
        },
        body: JSON.stringify({
          query,
        }),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      const resp = await response;
      console.log(resp.status, resp.statusText, resp.ok, resp.type, resp.url);
      const json = await resp.json();
      return json.data;
    } catch (error) {
      retries++;
      console.log(`Attempt ${retries}/${maxRetries} failed:`, error);
      
      if (retries >= maxRetries) {
        console.error("Max retries reached. Giving up.");
        throw error;
      }
      
      const delay = Math.min(1000 * Math.pow(2, retries), 10000);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  return {} as T;
};
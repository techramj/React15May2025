import { useEffect } from "react"


export const useTitle = (title) => {
  useEffect(() => {
    console.log('Setting document title to:', title);
    document.title = `${title}`; // Set the document title
  }, [title]); // This effect will run whenever the title changes
}



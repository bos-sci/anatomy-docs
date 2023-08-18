import { useEffect } from 'react';

// Automatically resizes height of TextArea when the value changes.
const useTextAreaResize = (textAreaRef: HTMLTextAreaElement | null, value: string, resize: boolean) => {
  useEffect(() => {
    if (textAreaRef && resize) {
      // reset height to use scrollHeight value
      textAreaRef.style.height = '';
      const scrollHeight = textAreaRef.scrollHeight * 0.0625;
      textAreaRef.style.height = scrollHeight + 'rem';
    }
  }, [textAreaRef, value, resize]);
};

export default useTextAreaResize;

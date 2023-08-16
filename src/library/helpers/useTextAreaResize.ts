import { useEffect } from 'react';

// Automatically resizes height of TextArea when the value changes.
const useTextAreaResize = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if (textAreaRef) {
      // reset height to use scrollHeight value
      textAreaRef.style.height = '';
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, value]);
};

export default useTextAreaResize;

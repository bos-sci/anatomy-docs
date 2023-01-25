const deprecatedElements = () => {
  const elements = [
    "acronym",
    "applet",
    "bgsound",
    "big",
    "blink",
    "center",
    "content",
    "dir",
    "font",
    "frame",
    "frameset",
    "image",
    "keygen",
    "marquee",
    "menuitem",
    "nobr",
    "noembed",
    "noframes",
    "param",
    "plaintext",
    "rb",
    "rtc",
    "shadow",
    "spacer",
    "strike",
    "tt",
    "xmp",
  ];
  return elements.map((element) => ({
    element: element,
    message: `<${element}> is deprecated. Please use a different element. https://developer.mozilla.org/en-US/docs/Web/HTML/Element#obsolete_and_deprecated_elements`,
  }));
};

module.exports = {
  deprecatedElements,
};

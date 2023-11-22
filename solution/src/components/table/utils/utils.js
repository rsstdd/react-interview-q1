export const canUseDOM = typeof document !== 'undefined';

export const calculateHeaderOffsetValues = tr => {
  let offsetLeftValues;
  try {
    const trChildren = tr?.childNodes ? Array.from(tr.childNodes) : [];
    offsetLeftValues = trChildren.map(({ offsetLeft = 0 }) => offsetLeft);
  } catch (e) {
    offsetLeftValues = [];
  }
  return offsetLeftValues;
};

export const getWidth = () => {
  let width = 0;
  if (!canUseDOM) return width;

  try {
    width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  } catch (e) {
    width = 0;
  }
  return width;
};

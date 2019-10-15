const getPath = (currEl) => {
  let el = currEl;
  let arr = [];

  const tagNameToLowerCase = (el) => {
    return el.tagName.toLocaleLowerCase();
  };

  const nthChildCount  = (el) => {
    let previousEl = el.previousElementSibling;
    let count = 1;

    while (previousEl) {
      count = count + 1;
      previousEl = previousEl.previousElementSibling;
    }

    return count;
  };

  const getTagName = (el) => {
    let previousEl = el.previousElementSibling;
    let nextEl = el.nextElementSibling;

    if (!previousEl && !nextEl) {
      return tagNameToLowerCase(el);
    }

    return `${tagNameToLowerCase(el)}:nth-child(${nthChildCount(el)})`;
  };

  try {
    while (el !== document.body) {
      arr.unshift(getTagName(el));
      el = el.parentElement;
    }

    return arr.join(' > ');
  } catch (error) {
    console.error('Выберите узел-элемент во вкладке Elements');
  }
};

getPath($0);

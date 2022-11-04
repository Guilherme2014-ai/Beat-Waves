const fixedSubDomain = () => {
    const subDomain = window.location.href.split("/")[3];
    const exception = ["page", "index.html", ""];

    return exception.includes(subDomain) ? "/" : `/${subDomain}/`;
};

const baseUrl = fixedSubDomain();

export { baseUrl };

const onDeploy = window.location.href.split("github").length > 1;

const baseUrl = onDeploy ? "/New-project/" : "/src/";

export { baseUrl };

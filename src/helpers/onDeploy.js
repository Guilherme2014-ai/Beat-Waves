const onDeploy = window.location.href.split("github").length > 1;

const baseUrl = onDeploy ? "/Beat-Waves/" : "/src/";

export { baseUrl };

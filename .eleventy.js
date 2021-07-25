module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles");
    return {
        pathPrefix: "/cpsc349-project2"
    }
};

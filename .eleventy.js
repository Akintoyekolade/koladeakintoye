module.exports = function(eleventyConfig) {
    // Set directories for input (source) and output (compiled) files
    return {
      dir: {
        input: "src", // The directory where your source files are located
        output: "public" // The directory where Eleventy will write the compiled files
      },
      // Optional: Configuration for template engines
      htmlTemplateEngine: "njk", // Use Nunjucks (njk) as the template engine for HTML files
      markdownTemplateEngine: "njk", // Use Nunjucks (njk) as the template engine for Markdown files
  
      // Optional: Add additional configuration as needed
      // For example, you can configure collections, filters, and more
      // For documentation and additional configuration options, refer to the Eleventy documentation
    };
  };
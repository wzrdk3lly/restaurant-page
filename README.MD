## Lessons Learned 
- Tailwind will automatically add css after re-rerunning npx tailwindcss... This can cause your css to render incorrectly. The hacky solution I found is to revert the generated *.css file after each coding session. 
  - Additionally when using Tailwindcss do not attempt to render your html and styling via javascript. If you absolutely had a requirement to render via JS you must not attempt to build using npx tailwind. 
- Use event bubbling to modify dynamically rendered elements
- Learning how to import/export my custom modules into js files
- Alternative way to render components in comparison to my [project-library](https://github.com/wzrdk3lly/project-library.git)
  
// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: "Javascript",
    competency: 8,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "Node.JS",
    competency: 6,
    category: ["Web Development", "Frameworks", "Javascript"],
  },
  {
    title: "SQL",
    competency: 7,
    category: ["Web Development", "Backend"],
  },
  {
    title: "React",
    competency: 8,
    category: ["Web Development", "Frameworks", "Javascript"],
  },
  {
    title: "Bootstrap",
    competency: 7,
    category: ["Web Development", "Frameworks"],
  },
  {
    title: "Spanish",
    competency: 10,
    category: ["Languages"],
  },
  {
    title: "Postman",
    competency: 6,
    category: ["Backend"],
  },
  {
    title: "Heroku",
    competency: 6,
    category: ["Web Development", "Backend", "Tools"],
  },
  {
    title: "Product Development",
    competency: 8,
    category: ["Product Management"],
  },
  {
    title: "User Research/Interviews",
    competency: 8,
    category: ["Product Management"],
  },
  {
    title: "Data Science/Analysis",
    competency: 7,
    category: ["Product Management"],
  },
  {
    title: "Marketing",
    competency: 7,
    category: ["Product Management"],
  },
  {
    title: "Leadership",
    competency: 9,
    category: ["Product Management"],
  },
  {
    title: "Communication",
    competency: 8,
    category: ["Product Management"],
  },
  {
    title: "Design Thinking",
    competency: 10,
    category: ["Product Management"],
  },
  {
    title: "Business/Financial Literacy",
    competency: 7,
    category: ["Product Management"],
  },
  {
    title: "UI/UX Design",
    competency: 6,
    category: ["Product Management"],
  },
  {
    title: "Git",
    competency: 8,
    category: ["Tools"],
  },
  {
    title: "Typescript",
    competency: 7,
    category: ["Web Development", "Languages"],
  },
  {
    title: "HTML",
    competency: 10,
    category: ["Web Development", "Languages"],
  },
  {
    title: "CSS",
    competency: 9,
    category: ["Web Development", "Languages"],
  },
  {
    title: "Python",
    competency: 10,
    category: ["Languages", "Python"],
  },
  {
    title: "C++",
    competency: 9,
    category: ["Languages"],
  },
  {
    title: "Java",
    competency: 6,
    category: ["Languages"],
  },
  {
    title: "Wireframing",
    competency: 6,
    category: ["Design", "Web Development"],
  },
  {
    title: "GraphQL",
    competency: 8,
    category: ["Web Development", "Backend"],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#6968b3",
  "#37b1f5",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
  "#d75858",
  "#747fff",
  "#64cb7b",
];

const categories = [...new Set(skills.reduce((acc, { category }) => acc.concat(category), []))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };

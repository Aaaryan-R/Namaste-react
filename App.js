const superSubHeading = React.createElement("h3", {class: "super-subheadings"}, "This is the super sub heading");
const subHeading1 = React.createElement("h3", {class: "subheadings"}, "This is a sub heading");
const subHeading2 = React.createElement("h3", {class: "subheadings"}, "This is the second sub heading");
const subHeading3 = React.createElement("h3", {class: "subheadings"}, ["This is the third sub heading", superSubHeading]);

const heading = React.createElement("h1", {id : "heading"}, ["Hello world!", subHeading1, subHeading2, subHeading3]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);